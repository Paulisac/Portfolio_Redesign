import pako from 'pako'

// This initializer injects the original tool markup into a provided root element
// and wires up the original script logic with scoped selectors (root.querySelector).

export default function initPrintTool(root){
  if(!root) return ()=>{}
  // inject markup (from the attached standalone file) — only the inner .app content
  root.innerHTML = `
  <div class="app">
    <header>
      <h1>🖨 RGB (AI) Image → Print Ready <span class="badge">True CMYK</span></h1>
      <p>Upload · Select Size · Set DPI · CMYK Preview · Export Press-Ready PDF</p>
    </header>

    <div class="steps" id="stepsBar">
      <div class="sdot active" data-s="1"><div class="sc">1</div><div class="sl">Upload</div></div>
      <div class="sline"></div>
      <div class="sdot" data-s="2"><div class="sc">2</div><div class="sl">Print Size</div></div>
      <div class="sline"></div>
      <div class="sdot" data-s="3"><div class="sc">3</div><div class="sl">DPI</div></div>
      <div class="sline"></div>
      <div class="sdot" data-s="4"><div class="sc">4</div><div class="sl">CMYK</div></div>
      <div class="sline"></div>
      <div class="sdot" data-s="5"><div class="sc">5</div><div class="sl">Export</div></div>
    </div>

    <!-- Step 1 -->
    <div id="p1" class="panel">
      <div class="card">
        <div class="ct">📁 Upload Image</div>
        <div class="drop" id="drop">
          <div id="dprompt">
            <div class="drop-ico">🖼</div>
            <h3>Drag & drop your image here</h3>
            <p>PNG · JPG · WebP · AVIF · any format</p>
            <button class="brw" id="browseBtn">Browse File</button>
          </div>
          <img id="prevImg" alt="preview">
        </div>
        <input type="file" id="fi" accept="image/*" style="display:none">
        <div class="meta" id="meta">
          <div class="mr"><span>File</span><span id="mName">—</span></div>
          <div class="mr"><span>Dimensions</span><span id="mDim">—</span></div>
          <div class="mr"><span>Size</span><span id="mSz">—</span></div>
        </div>
      </div>
      <div class="nav"><button class="bbk" disabled>← Back</button><button class="bnx" id="n1" disabled>Next →</button></div>
    </div>

    <!-- Step 2 -->
    <div id="p2" class="panel hidden">
      <div class="card">
        <div class="ct">📐 Select Print Size</div>
        <div class="tabs">
          <button class="tab active" data-cat="std">Standard</button>
          <button class="tab" data-cat="ban">Banner</button>
          <button class="tab" data-cat="cus">Custom</button>
        </div>
        <div id="cat-std"><div class="sgrid" id="stdG"></div></div>
        <div id="cat-ban" class="hidden"><div class="sgrid" id="banG"></div></div>
        <div id="cat-cus" class="hidden">
          <div class="crow">
            <label>W</label><input type="number" id="cW" placeholder="Width" min="1">
            <label>H</label><input type="number" id="cH" placeholder="Height" min="1">
            <select id="cU"><option value="mm">mm</option><option value="in">inches</option><option value="cm">cm</option><option value="ft">feet</option></select>
          </div>
        </div>
        <div class="fp" id="fp">
          <div class="fp-top">
            <span class="fp-label">🔍 Print Preview</span>
            <div class="fmodes">
              <button class="fmbtn sel" data-fm="fit">Fit</button>
              <button class="fmbtn" data-fm="fill">Fill</button>
              <button class="fmbtn" data-fm="stretch">Stretch</button>
            </div>
          </div>
          <div class="orow">
            <button class="obtn sel" id="oP">◻ Portrait</button>
            <button class="obtn" id="oL">▭ Landscape</button>
          </div>
          <canvas id="fitC" width="400" height="260"></canvas>
          <div class="finfo" id="finfo"></div>
        </div>
      </div>
      <div class="nav"><button class="bbk" id="back2">← Back</button><button class="bnx" id="n2" disabled>Next →</button></div>
    </div>

    <!-- Step 3 -->
    <div id="p3" class="panel hidden">
      <div class="card">
        <div class="ct">🎯 Set Resolution (DPI)</div>
        <div class="drow">
          <button class="dbtn" data-dpi="72">72 DPI<small>Screen</small></button>
          <button class="dbtn" data-dpi="100">100 DPI<small>Banner</small></button>
          <button class="dbtn" data-dpi="150">150 DPI<small>Draft</small></button>
          <button class="dbtn sel" data-dpi="300">300 DPI<small>Standard ✓</small></button>
          <button class="dbtn" data-dpi="600">600 DPI<small>High Quality</small></button>
        </div>
        <div style="display:flex;align-items:center;gap:7px;margin-bottom:11px">
          <label style="color:#555;font-size:.78rem">Custom:</label>
          <input type="number" id="cdpi" placeholder="e.g. 200" min="1" max="1200" style="width:80px;padding:6px 8px;border-radius:6px;border:1px solid #282828;background:#0e0e0e;color:#ccc;font-size:.78rem">
          <span style="color:#555;font-size:.78rem">DPI</span>
        </div>
        <div class="dinfo" style="margin-bottom:11px;background:rgba(0,229,255,.04);border-color:rgba(0,229,255,.15)">
          <div style="font-size:.74rem;color:#4dd0e1;font-weight:600;margin-bottom:6px">💡 Recommended DPI by print type</div>
          <div class="dr"><span>Documents, flyers, photos (viewed close)</span><span style="color:#ccc">300 DPI</span></div>
          <div class="dr"><span>Posters (viewed 3–6 ft away)</span><span style="color:#ccc">150 DPI</span></div>
          <div class="dr"><span>Banners, backdrops (viewed 6+ ft away)</span><span style="color:#ccc">72–100 DPI</span></div>
        </div>
        <div class="dinfo">
          <div class="dr"><span>Selected DPI</span><span id="dv">300 DPI</span></div>
          <div class="dr"><span>Output pixels (W × H)</span><span id="dpx">—</span></div>
          <div class="dr"><span>Est. raw image size</span><span id="dfs">—</span></div>
          <div class="dr"><span>Will export at</span><span id="dexp">—</span></div>
        </div>
        <div class="warn" id="dwarn"></div>
        <div class="warn" id="dwarn2" style="background:rgba(0,229,255,.06);border-color:rgba(0,229,255,.2);color:#4dd0e1"></div>
      </div>
      <div class="nav"><button class="bbk" id="back3">← Back</button><button class="bnx" id="to4">Next →</button></div>
    </div>

    <!-- Step 4 -->
    <div id="p4" class="panel hidden">
      <div class="card">
        <div class="ct">🎨 RGB → CMYK Conversion</div>
        <div class="proc" id="proc"><div class="spin"></div><p>Converting to CMYK ink channels…</p></div>
        <div id="cmykRes" class="hidden">
          <div class="channels">
            <div class="chwrap"><canvas id="chC"></canvas><div class="chl c-c">C — Cyan</div></div>
            <div class="chwrap"><canvas id="chM"></canvas><div class="chl c-m">M — Magenta</div></div>
            <div class="chwrap"><canvas id="chY"></canvas><div class="chl c-y">Y — Yellow</div></div>
            <div class="chwrap"><canvas id="chK"></canvas><div class="chl c-k">K — Black</div></div>
            <div class="chwrap"><canvas id="chCo"></canvas><div class="chl c-comp">Composite</div></div>
          </div>
          <p style="font-size:.68rem;color:#444;margin-top:9px;text-align:center">Darker = more ink · Each channel = one printing plate · Export PDF uses true DeviceCMYK colorspace</p>
          <div class="warn" style="display:block;background:rgba(255,152,0,.07);border-color:rgba(255,152,0,.2);color:#ffb74d;margin-top:10px">
            ⚠ RGB → CMYK conversion narrows the color gamut. Bright/saturated colors — especially neon greens, electric blues, and vivid oranges — may look duller or shift slightly when actually printed. This preview approximates that shift, but real results vary by printer and paper.
          </div>
        </div>
      </div>
      <div class="nav"><button class="bbk" id="back4">← Back</button><button class="bnx" id="n4" disabled>Next →</button></div>
    </div>

    <!-- Step 5 -->
    <div id="p5" class="panel hidden">
      <div class="card">
        <div class="ct">💾 Export Print File</div>
        <div class="esum" id="esum"></div>
        <div style="margin-bottom:11px">
          <div style="color:#555;font-size:.72rem;margin-bottom:6px">Format</div>
          <div class="fmts">
            <button class="fbtn sel" data-f="pdf">PDF (CMYK)</button>
            <button class="fbtn" data-f="tif">TIFF (CMYK)</button>
          </div>
        </div>
        <button class="expbtn" id="expBtn">⬇ Generate Print File</button>
        <p class="expnote">True DeviceCMYK · Correct physical dimensions · Press-ready</p>
        <div class="exout" id="exout"></div>
        <button class="bbk" id="newImgBtn" style="width:100%;margin-top:12px;display:none">🔄 Start New Image</button>
      </div>
      <div class="nav"><button class="bbk" id="back5">← Back</button><div style="width:70px"></div></div>
    </div>
  </div>
  `

  // Now run the original script logic with scoped selectors
  // For brevity, adapt key parts: state, upload, build grids, DPI calc, CMYK preview, export

  const FT = 304.8, IN = 25.4, CM = 10
  const SIZES = {
    std:[
      {n:'A3',w:297,h:420,d:'297×420 mm'},{n:'A4',w:210,h:297,d:'210×297 mm'},{n:'A5',w:148,h:210,d:'148×210 mm'},{n:'A6',w:105,h:148,d:'105×148 mm'},{n:'Letter',w:215.9,h:279.4,d:'8.5×11 in'},{n:'Legal',w:215.9,h:355.6,d:'8.5×14 in'},{n:'Tabloid',w:279.4,h:431.8,d:'11×17 in'},
    ],
    ban:[
      {n:'Roll-up 2.5×6.5',w:2.5*FT,h:6.5*FT,d:'2.5×6.5 ft'},{n:'Roll-up 3×7',w:3*FT,h:7*FT,d:'3×7 ft'},{n:'Vinyl 3×6',w:3*FT,h:6*FT,d:'3×6 ft'},{n:'Vinyl 4×8',w:4*FT,h:8*FT,d:'4×8 ft'},
    ]
  }

  let state = { step:1, img:null, size:null, sName:'', dpi:300, orient:'portrait', fitMode:'fit', fmt:'pdf' }
  const _listeners = []
  const _sButtons = []
  function addListener(el, evt, fn){ if(!el) return; el.addEventListener(evt, fn); _listeners.push([el, evt, fn]) }

  // helpers
  function rgbCmyk(r,g,b){const r1=r/255,g1=g/255,b1=b/255,k=1-Math.max(r1,g1,b1);if(k>=1)return[0,0,0,1];const d=1-k;return[(1-r1-k)/d,(1-g1-k)/d,(1-b1-k)/d,k]}

  function sb(s){const b=new Uint8Array(s.length);for(let i=0;i<s.length;i++)b[i]=s.charCodeAt(i)&0xff;return b}
  function jb(...a){const t=a.reduce((s,x)=>s+x.length,0),o=new Uint8Array(t);let p=0;for(const x of a){o.set(x,p);p+=x.length;}return o}

  function buildCMYKPdf(canvas,wMM,hMM){
    const w=canvas.width,h=canvas.height;const px=canvas.getContext('2d').getImageData(0,0,w,h).data
    const raw=new Uint8Array(w*h*4)
    for(let i=0,j=0;i<px.length;i+=4,j+=4){const[c,m,y,k]=rgbCmyk(px[i],px[i+1],px[i+2]);raw[j]=c*255+.5|0;raw[j+1]=m*255+.5|0;raw[j+2]=y*255+.5|0;raw[j+3]=k*255+.5|0}
    const imgZ=pako.deflate(raw)
    const pt=v=> (v*72/25.4).toFixed(3)
    const wPt=pt(wMM), hPt=pt(hMM)
    const cs=`q ${wPt} 0 0 ${hPt} 0 0 cm /Im0 Do Q`
    const o1=`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`
    const o2=`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`
    const o3=`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${wPt} ${hPt}] /Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>\nendobj\n`
    const o4=`4 0 obj\n<< /Length ${cs.length} >>\nstream\n${cs}\nendstream\nendobj\n`
    const o5h=`5 0 obj\n<< /Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /DeviceCMYK /BitsPerComponent 8 /Filter /FlateDecode /Length ${imgZ.length} >>\nstream\n`
    const o5f=`\nendstream\nendobj\n`
    const hdr=sb('%PDF-1.4\n')
    const b1=sb(o1),b2=sb(o2),b3=sb(o3),b4=sb(o4),b5h=sb(o5h),b5f=sb(o5f)
    const xo=[0,0,0,0,0,0];let pos=hdr.length;xo[1]=pos;pos+=b1.length;xo[2]=pos;pos+=b2.length;xo[3]=pos;pos+=b3.length;xo[4]=pos;pos+=b4.length;xo[5]=pos;pos+=b5h.length+imgZ.length+b5f.length
    const p10=n=>String(n).padStart(10,'0')
    const xref=`xref\n0 6\n0000000000 65535 f\r\n${p10(xo[1])} 00000 n\r\n${p10(xo[2])} 00000 n\r\n${p10(xo[3])} 00000 n\r\n${p10(xo[4])} 00000 n\r\n${p10(xo[5])} 00000 n\r\ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${pos}\n%%EOF`
    return jb(hdr,b1,b2,b3,b4,b5h,imgZ,b5f,sb(xref))
  }

  function buildCMYKTiff(canvas,dpi){
    const w=canvas.width,h=canvas.height;const px=canvas.getContext('2d').getImageData(0,0,w,h).data;const raw=new Uint8Array(w*h*4)
    for(let i=0,j=0;i<px.length;i+=4,j+=4){const[c,m,y,k]=rgbCmyk(px[i],px[i+1],px[i+2]);raw[j]=c*255+.5|0;raw[j+1]=m*255+.5|0;raw[j+2]=y*255+.5|0;raw[j+3]=k*255+.5|0}
    const numTags=11;const headerSize=8;const ifdOffset=headerSize;const ifdSize=2+numTags*12+4;const bpsOffset=ifdOffset+ifdSize;const xresOffset=bpsOffset+8;const yresOffset=xresOffset+8;const dataOffset=yresOffset+8
    const buf=new ArrayBuffer(dataOffset+raw.length);const dv=new DataView(buf);dv.setUint16(0,0x4949,true);dv.setUint16(2,42,true);dv.setUint32(4,ifdOffset,true)
    let p=ifdOffset;dv.setUint16(p,numTags,true);p+=2
    function tag(id,type,count,val){dv.setUint16(p,id,true);dv.setUint16(p+2,type,true);dv.setUint32(p+4,count,true);if(type===3&&count===1)dv.setUint16(p+8,val,true);else dv.setUint32(p+8,val,true);p+=12}
    tag(256,3,1,w);tag(257,3,1,h);tag(258,3,4,bpsOffset);tag(259,3,1,1);tag(262,3,1,5);tag(273,4,1,dataOffset);tag(277,3,1,4);tag(278,3,1,h);tag(279,4,1,raw.length);tag(282,5,1,xresOffset);tag(283,5,1,yresOffset);dv.setUint32(p,0,true);p+=4
    dv.setUint16(bpsOffset,8,true);dv.setUint16(bpsOffset+2,8,true);dv.setUint16(bpsOffset+4,8,true);dv.setUint16(bpsOffset+6,8,true);dv.setUint32(xresOffset,dpi,true);dv.setUint32(xresOffset+4,1,true);dv.setUint32(yresOffset,dpi,true);dv.setUint32(yresOffset+4,1,true);
    new Uint8Array(buf,dataOffset).set(raw);return new Uint8Array(buf)
  }

  // DOM helpers scoped to root
  const $ = sel => root.querySelector(sel)
  const $$ = sel => Array.from(root.querySelectorAll(sel))

  // state UI elements
  const drop = $('#drop'), fi = $('#fi'), prevImg = $('#prevImg'), dprompt = $('#dprompt'), metaEl = $('#meta'), n1 = $('#n1'), n2 = $('#n2'), n4btn = $('#n4')
  const stdG = $('#stdG'), banG = $('#banG')
  const cdpi = $('#cdpi'), dv = $('#dv'), dpx = $('#dpx'), dfs = $('#dfs'), dexp = $('#dexp'), dwarn = $('#dwarn'), dwarn2 = $('#dwarn2')
  const proc = $('#proc'), cmykRes = $('#cmykRes'), chC = $('#chC'), chM = $('#chM'), chY = $('#chY'), chK = $('#chK'), chCo = $('#chCo')
  const esum = $('#esum'), expBtn = $('#expBtn'), exout = $('#exout'), newImgBtn = $('#newImgBtn')

  // step navigation helper
  function showStep(n){
    console.log('[print-tool] showStep ->', n, 'from', state.step)
    $$('.panel').forEach(p=>p.classList.add('hidden'))
    const p=$('#p'+n); if(p) p.classList.remove('hidden')
    $$('.sdot').forEach(el=>{const s=+el.dataset.s; el.classList.toggle('active', s===n); el.classList.toggle('done', s<n)})
    state.step = n
    if(n===4) {
      try { doCMYK() } catch(err){ console.error('[print-tool] doCMYK error', err); $('#proc').classList.add('hidden'); $('#cmykRes').classList.add('hidden'); dwarn.textContent='Error during conversion: '+err.message; dwarn.style.display='block' }
    }
    if(n===5) buildSummary()
  }

  // upload
  const _onDragOver = e => { e.preventDefault(); drop.classList.add('over') }
  const _onDragLeave = () => { drop.classList.remove('over') }
  const _onDrop = e => { e.preventDefault(); drop.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files[0]) loadF(e.dataTransfer.files[0]) }
  addListener(drop, 'dragover', _onDragOver)
  addListener(drop, 'dragleave', _onDragLeave)
  addListener(drop, 'drop', _onDrop)
  addListener($('#browseBtn'), 'click', ()=>fi.click())
  const _onFileChange = e => loadF(e.target.files[0])
  addListener(fi, 'change', _onFileChange)

  function loadF(file){ if(!file||!file.type.startsWith('image/'))return; const r=new FileReader(); r.onload=e=>{ const url=e.target.result; const img=new Image(); img.onload=()=>{ state.img=img; prevImg.src=url; prevImg.style.display='block'; dprompt.style.display='none'; metaEl.style.display='block'; $('#mName').textContent=file.name; $('#mDim').textContent=img.naturalWidth+' × '+img.naturalHeight+' px'; $('#mSz').textContent=(file.size/1024).toFixed(0)+' KB'; n1.disabled=false }; img.src=url }; r.readAsDataURL(file) }
  addListener(n1, 'click', ()=>{ if(state.img) showStep(2) })

  // build size grids
  function buildGrid(sizes,container){ container.innerHTML=''; sizes.forEach(sz=>{ const b=document.createElement('button'); b.className='sbtn'; b.innerHTML=`<span class="sn">${sz.n}</span><span class="sd">${sz.d}</span>`; const handler=()=>{ $$('.sbtn').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); state.size={w:sz.w,h:sz.h}; state.sName=sz.n; n2.disabled=false; showFit(); updDpi(); }; addListener(b,'click',handler); _sButtons.push(b); container.appendChild(b) }) }
  buildGrid(SIZES.std,stdG); buildGrid(SIZES.ban,banG)

  $$('.tab').forEach(t=>{ addListener(t, 'click', ()=>{ $$('.tab').forEach(x=>x.classList.remove('active')); t.classList.add('active'); ['std','ban','cus'].forEach(c=>$('#cat-'+c).classList.add('hidden')); $('#cat-'+t.dataset.cat).classList.remove('hidden'); if(t.dataset.cat==='cus') listenCustom(); }) })

  function listenCustom(){ const chk=()=>{ const w=+$('#cW').value,h=+$('#cH').value; const u=$('#cU').value; if(!w||!h) return; const f={mm:1,in:IN,cm:CM,ft:FT}[u]; state.size={w:w*f,h:h*f}; state.sName=`Custom ${w}×${h} ${u}`; n2.disabled=false; showFit(); updDpi(); }; ['cW','cH','cU'].forEach(id=>addListener($('#'+id), 'input', chk)) }

  addListener($('#oP'), 'click', ()=>{ state.orient='portrait'; $('#oP').classList.add('sel'); $('#oL').classList.remove('sel'); showFit(); updDpi() })
  addListener($('#oL'), 'click', ()=>{ state.orient='landscape'; $('#oL').classList.add('sel'); $('#oP').classList.remove('sel'); showFit(); updDpi() })
  $$('.fmbtn').forEach(b=> addListener(b, 'click', ()=>{ $$('.fmbtn').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); state.fitMode=b.dataset.fm; showFit() }))
  addListener($('#n2'), 'click', ()=>showStep(3))

  function pageWH(){ let w=state.size.w,h=state.size.h; if(state.orient==='landscape'&&w<h)[w,h]=[h,w]; if(state.orient==='portrait'&&w>h)[w,h]=[h,w]; return{w,h} }

  function showFit(){ if(!state.size||!state.img) return; $('#fp').style.display='block'; const fc=$('#fitC'); const ctx=fc.getContext('2d'); const cw=fc.width=400,ch=fc.height=260; const{w:pw,h:ph}=pageWH(); const pad=24; const sc=Math.min((cw-pad*2)/pw,(ch-pad*2)/ph); const rw=pw*sc|0,rh=ph*sc|0; const rx=(cw-rw)/2,ry=(ch-rh)/2; ctx.fillStyle='#0a0a0a'; ctx.fillRect(0,0,cw,ch); ctx.shadowColor='rgba(0,0,0,.7)'; ctx.shadowBlur=16; ctx.shadowOffsetY=5; ctx.fillStyle='#fff'; ctx.fillRect(rx,ry,rw,rh); ctx.shadowColor='transparent'; ctx.shadowBlur=0; ctx.shadowOffsetY=0; const iw=state.img.naturalWidth,ih=state.img.naturalHeight; let dx=rx,dy=ry,dw=rw,dh=rh,sx=0,sy=0,sw=iw,sh=ih; if(state.fitMode==='fit'){ const ar=iw/ih,par=rw/rh; if(ar>par){dh=rw/ar|0;dy=ry+(rh-dh)/2;} else{dw=rh*ar|0;dx=rx+(rw-dw)/2;} } else if(state.fitMode==='fill'){ const ar=iw/ih,par=rw/rh; if(ar>par){sw=ih*par|0;sx=(iw-sw)/2;} else{sh=iw/par|0;sy=(ih-sh)/2;} } ctx.save();ctx.beginPath();ctx.rect(rx,ry,rw,rh);ctx.clip(); ctx.drawImage(state.img,sx,sy,sw,sh,dx,dy,dw,dh); ctx.restore(); ctx.strokeStyle='rgba(0,229,255,.4)'; ctx.lineWidth=1.5; ctx.strokeRect(rx,ry,rw,rh); ctx.fillStyle='rgba(0,229,255,.75)'; ctx.font='bold 10px Segoe UI'; const wL=pw>=1000?(pw/FT).toFixed(1)+' ft':Math.round(pw)+' mm'; const hL=ph>=1000?(ph/FT).toFixed(1)+' ft':Math.round(ph)+' mm'; ctx.textAlign='center'; ctx.fillText(wL,cw/2,ry-6); ctx.save();ctx.translate(rx-8,ch/2);ctx.rotate(-Math.PI/2);ctx.fillText(hL,0,0);ctx.restore(); const mL={'fit':'Fit to Page','fill':'Fill Page','stretch':'Stretch'}[state.fitMode]; $('#finfo').textContent=`${mL} · Image: ${iw}×${ih}px → ${Math.round(pw)}×${Math.round(ph)} mm` }

  // DPI page
  function outPx(){ if(!state.size) return null; const{w,h}=pageWH(); return{wPx:Math.round((w/IN)*state.dpi),hPx:Math.round((h/IN)*state.dpi),wMM:w,hMM:h} }

  function updDpi(){ const o=outPx(); if(!o) return; $('#dv').textContent=state.dpi+' DPI'; $('#dpx').textContent=o.wPx.toLocaleString()+' × '+o.hPx.toLocaleString()+' px'; $('#dfs').textContent='~'+(o.wPx*o.hPx*4/1e6).toFixed(1)+' MB (4ch CMYK)'; const EXPORT_MAX=12000; const longEdge=Math.max(o.wPx,o.hPx); const expEl=$('#dexp'); const w=$('#dwarn'); const w2=$('#dwarn2'); if(longEdge>EXPORT_MAX){ const ratio=EXPORT_MAX/longEdge; const expW=Math.round(o.wPx*ratio), expH=Math.round(o.hPx*ratio); const maxDpiForSize=Math.floor(state.dpi*ratio); expEl.textContent=expW.toLocaleString()+' × '+expH.toLocaleString()+' px (capped)'; expEl.style.color='#ff9800'; w.textContent=`⚠ Your selected size + DPI needs ${longEdge.toLocaleString()}px, but this tool supports up to 12,000px on the longest side. Your export will be scaled down to ${Math.max(expW,expH).toLocaleString()}px — effectively ~${maxDpiForSize} DPI at this size. For full ${state.dpi} DPI at this print size, use a tool that supports higher resolution, or reduce the DPI / print size.`; w.style.display='block'; } else { expEl.textContent=o.wPx.toLocaleString()+' × '+o.hPx.toLocaleString()+' px (full resolution)'; expEl.style.color='#00c853'; w.style.display='none'; } if(o.wPx*o.hPx>40e6 || longEdge>6000){ w2.textContent='⚠ Large exports may use significant memory and could be slow on older devices or mobile browsers. Keep this tab active while generating.'; w2.style.display='block'; } else { w2.style.display='none' } }

  $$('.dbtn').forEach(b=> addListener(b, 'click', ()=>{ $$('.dbtn').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); state.dpi=+b.dataset.dpi; $('#cdpi').value=''; updDpi(); }))
  addListener($('#cdpi'), 'input', e=>{ const v=+e.target.value; if(v>0){ state.dpi=v; $$('.dbtn').forEach(x=>x.classList.remove('sel')); updDpi(); } })

  // CMYK preview
  function procImg(el,maxPx){ const sc=Math.min(1,maxPx/Math.max(el.naturalWidth,el.naturalHeight)); const w=Math.round(el.naturalWidth*sc), h=Math.round(el.naturalHeight*sc); const c=document.createElement('canvas'); c.width=w; c.height=h; c.getContext('2d').drawImage(el,0,0,w,h); const px=c.getContext('2d').getImageData(0,0,w,h).data; const out=new Float32Array(w*h*4); for(let i=0,j=0;i<px.length;i+=4,j+=4){ const[cc,mm,yy,kk]=rgbCmyk(px[i],px[i+1],px[i+2]); out[j]=cc;out[j+1]=mm;out[j+2]=yy;out[j+3]=kk } return{px:out,w,h} }
  function drawCh(data,ch,canvas,tint){ const{px,w,h}=data; canvas.width=w; canvas.height=h; const ctx=canvas.getContext('2d'),id=ctx.createImageData(w,h),d=id.data; for(let i=0,j=0;i<w*h;i++,j+=4){ const ink=px[i*4+ch]; d[j]=255+(tint[0]-255)*ink+.5|0; d[j+1]=255+(tint[1]-255)*ink+.5|0; d[j+2]=255+(tint[2]-255)*ink+.5|0; d[j+3]=255 } ctx.putImageData(id,0,0) }
  function drawComp(data,canvas){ const{px,w,h}=data; canvas.width=w; canvas.height=h; const ctx=canvas.getContext('2d'),id=ctx.createImageData(w,h),d=id.data; for(let i=0,j=0;i<w*h;i++,j+=4){ const c=px[i*4],m=px[i*4+1],y=px[i*4+2],k=px[i*4+3]; d[j]=255*(1-c)*(1-k)+.5|0; d[j+1]=255*(1-m)*(1-k)+.5|0; d[j+2]=255*(1-y)*(1-k)+.5|0; d[j+3]=255 } ctx.putImageData(id,0,0) }

  function doCMYK(){
    console.log('[print-tool] doCMYK start')
    try{
      proc.classList.remove('hidden'); cmykRes.classList.add('hidden'); $('#n4').disabled=true; state.processing = true
      setTimeout(()=>{
        try{
          const prev=procImg(state.img,480)
          drawCh(prev,0,chC,[0,255,255]); drawCh(prev,1,chM,[255,0,255]); drawCh(prev,2,chY,[255,255,0]); drawCh(prev,3,chK,[0,0,0]); drawComp(prev,chCo)
          proc.classList.add('hidden'); cmykRes.classList.remove('hidden'); $('#n4').disabled=false; state.processing = false
          console.log('[print-tool] doCMYK complete')
        }catch(err){
          console.error('[print-tool] doCMYK inner error', err)
          proc.classList.add('hidden'); cmykRes.classList.add('hidden'); dwarn.textContent='Conversion failed: '+err.message; dwarn.style.display='block'; $('#n4').disabled=true; state.processing=false
        }
      },80)
    }catch(err){
      console.error('[print-tool] doCMYK error', err)
      proc.classList.add('hidden'); cmykRes.classList.add('hidden'); dwarn.textContent='Conversion failed: '+err.message; dwarn.style.display='block'; $('#n4').disabled=true; state.processing=false
    }
  }

  // export summary
  function buildSummary(){ const o=outPx(); if(!o) return; const items=[['Print Size',state.sName],['W × H',Math.round(o.wMM)+' × '+Math.round(o.hMM)+' mm'],['Resolution',state.dpi+' DPI'],['Output Pixels',o.wPx.toLocaleString()+' × '+o.hPx.toLocaleString()],['Color Mode','CMYK (DeviceCMYK)'],['Fit Mode',{'fit':'Fit to Page','fill':'Fill Page','stretch':'Stretch'}[state.fitMode]]]; esum.innerHTML=items.map(([l,v])=>`<div class="ei"><div class="el">${l}</div><div class="ev">${v}</div></div>`).join('') }

  $$('.fbtn').forEach(b=> addListener(b, 'click', ()=>{ $$('.fbtn').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); state.fmt=b.dataset.f }))

  addListener(expBtn, 'click', async ()=>{
    const btn=expBtn; btn.disabled=true; btn.textContent='⏳ Building CMYK file…'; await new Promise(r=>setTimeout(r,60));
    try{
      const o=outPx(); const MAX=12000; const sc=Math.min(1,MAX/Math.max(o.wPx,o.hPx)); const ew=Math.round(o.wPx*sc), eh=Math.round(o.hPx*sc);
      const ec=document.createElement('canvas'); ec.width=ew; ec.height=eh; // apply fit
      // simple fit: draw image to ec using same logic as showFit
      const ctx=ec.getContext('2d'); ctx.fillStyle='#fff'; ctx.fillRect(0,0,ew,eh);
      const iw=state.img.naturalWidth, ih=state.img.naturalHeight; let sx=0,sy=0,sw=iw,sh=ih,dw=ew,dh=eh,dx=0,dy=0;
      if(state.fitMode==='fit'){ const ar=iw/ih, par=ew/eh; if(ar>par){ dh=ew/ar|0; dy=(eh-dh)/2 } else { dw=eh*ar|0; dx=(ew-dw)/2 } } else if(state.fitMode==='fill'){ const ar=iw/ih, par=ew/eh; if(ar>par){ sw=ih*par|0; sx=(iw-sw)/2 } else { sh=iw/par|0; sy=(ih-sh)/2 } }
      ctx.drawImage(state.img,sx,sy,sw,sh,dx,dy,dw,dh);

      const fname=state.sName.replace(/[\s\/]/g,'_')+'_'+state.dpi+'dpi'; exout.innerHTML=''; exout.style.display='block';
      if(state.fmt==='pdf'){
        btn.textContent='⏳ Converting CMYK + compressing…'; await new Promise(r=>setTimeout(r,10)); const pdfBytes=buildCMYKPdf(ec,o.wMM,o.hMM); const blob=new Blob([pdfBytes],{type:'application/pdf'}); const dlURL=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=dlURL; a.download=fname+'_CMYK.pdf'; a.className='dl-btn'; a.textContent='⬇ Download '+fname+'_CMYK.pdf'; exout.appendChild(a); const tag=document.createElement('p'); tag.style.cssText='font-size:.68rem;color:#444;margin-top:8px'; tag.textContent='✓ True /DeviceCMYK colorspace PDF — verify in Acrobat → Output Preview'; exout.appendChild(tag);
      } else {
        btn.textContent='⏳ Building CMYK TIFF…'; await new Promise(r=>setTimeout(r,10)); const tiffBytes=buildCMYKTiff(ec,state.dpi); const blob=new Blob([tiffBytes],{type:'image/tiff'}); const dlURL=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=dlURL; a.download=fname+'_CMYK.tif'; a.className='dl-btn'; a.textContent='⬇ Download '+fname+'_CMYK.tif'; exout.appendChild(a); const tag=document.createElement('p'); tag.style.cssText='font-size:.68rem;color:#444;margin-top:8px'; tag.textContent='✓ Real 4-channel CMYK TIFF (uncompressed) — opens directly in Photoshop as CMYK Color mode'; exout.appendChild(tag);
      }
    }catch(e){ const err=document.createElement('p'); err.style.cssText='color:#ff4081;font-size:.8rem;margin-top:8px'; err.textContent='Error: '+e.message; exout.appendChild(err) }
    expBtn.disabled=false; expBtn.innerHTML='⬇ Generate Print File'; $('#newImgBtn').style.display='block'
  })

  // Add explicit handler for Step 4 -> Step 5 with validation, loading state and logs
  addListener($('#n4'), 'click', async ()=>{
    console.log('[print-tool] n4 clicked; step=', state.step, 'processing=', !!state.processing)
    if(state.processing){ console.log('[print-tool] action blocked: processing in progress'); return }
    // basic validation
    if(!state.img){ dwarn.textContent='Please upload an image before proceeding.'; dwarn.style.display='block'; console.warn('[print-tool] validation blocked: no image'); return }
    if(!state.size){ dwarn.textContent='Please select a print size before proceeding.'; dwarn.style.display='block'; console.warn('[print-tool] validation blocked: no size'); return }
    if(!state.dpi || state.dpi <= 0){ dwarn.textContent='Please select a valid DPI.'; dwarn.style.display='block'; console.warn('[print-tool] validation blocked: invalid DPI'); return }
    // ensure CMYK preview is ready
    if($('#cmykRes').classList.contains('hidden')){
      console.log('[print-tool] CMYK preview not ready, running conversion...')
      try{ await new Promise((res,rej)=>{ try{ doCMYK(); setTimeout(res,300) }catch(e){ rej(e) } }) }catch(err){ dwarn.textContent='Unable to build CMYK preview: '+err.message; dwarn.style.display='block'; console.error('[print-tool] conversion failed on n4 click', err); return }
    }
    // show loading state
    try{
      state.processing = true
      $('#n4').disabled = true
      $('#n4').textContent = '⏳ Preparing export…'
      console.log('[print-tool] preparing summary and moving to step 5')
      await new Promise(r=>setTimeout(r, 180))
      buildSummary()
      showStep(5)
    }catch(err){
      console.error('[print-tool] n4 handler error', err)
      dwarn.textContent = 'Unexpected error: '+err.message
      dwarn.style.display='block'
    }finally{
      state.processing = false
      const btn = $('#n4'); if(btn){ btn.disabled = false; btn.textContent = 'Next →' }
    }
  })

  addListener($('#newImgBtn'), 'click',()=>{
    state.step=1; state.img=null; state.size=null; state.sName=''; state.dpi=300; state.orient='portrait'; state.fitMode='fit'; state.fmt='pdf'; prevImg.style.display='none'; dprompt.style.display='block'; metaEl.style.display='none'; n1.disabled=true; fi.value=''; exout.innerHTML=''; exout.style.display='none'; $('#newImgBtn').style.display='none'; $$('.sbtn').forEach(x=>x.classList.remove('sel')); n2.disabled=true; $('#fp').style.display='none'; $$('.dbtn').forEach(x=>x.classList.remove('sel')); $$('.dbtn').forEach(x=>{ if(x.dataset.dpi==='300') x.classList.add('sel') }); $('#cdpi').value=''; $$('.fbtn').forEach(x=>x.classList.remove('sel')); $$('.fbtn').forEach(x=>{ if(x.dataset.f==='pdf') x.classList.add('sel') }); $$('.sdot').forEach(el=>{ const s=+el.dataset.s; el.classList.toggle('active',s===1); el.classList.remove('done') }); $$('.panel').forEach(p=>p.classList.add('hidden')); $('#p1').classList.remove('hidden') })

  // wire other nav buttons (back)
  addListener($('#back2'), 'click', ()=>showStep(1))
  addListener($('#back3'), 'click', ()=>showStep(2))
  addListener($('#back4'), 'click', ()=>showStep(3))
  addListener($('#back5'), 'click', ()=>showStep(4))
  addListener($('#to4'), 'click', ()=>showStep(4))

  // helper for grid actions referenced earlier
  function updDpi(){ const o=outPx(); if(!o) return; $('#dv').textContent=state.dpi+' DPI'; $('#dpx').textContent=o.wPx.toLocaleString()+' × '+o.hPx.toLocaleString()+' px'; $('#dfs').textContent='~'+(o.wPx*o.hPx*4/1e6).toFixed(1)+' MB (4ch CMYK)'; const EXPORT_MAX=12000; const longEdge=Math.max(o.wPx,o.hPx); const expEl=$('#dexp'); const w=$('#dwarn'); const w2=$('#dwarn2'); if(longEdge>EXPORT_MAX){ const ratio=EXPORT_MAX/longEdge; const expW=Math.round(o.wPx*ratio), expH=Math.round(o.hPx*ratio); const maxDpiForSize=Math.floor(state.dpi*ratio); expEl.textContent=expW.toLocaleString()+' × '+expH.toLocaleString()+' px (capped)'; expEl.style.color='#ff9800'; w.textContent=`⚠ Your selected size + DPI needs ${longEdge.toLocaleString()}px, but this tool supports up to 12,000px on the longest side. Your export will be scaled down to ${Math.max(expW,expH).toLocaleString()}px — effectively ~${maxDpiForSize} DPI at this size. For full ${state.dpi} DPI at this print size, use a tool that supports higher resolution, or reduce the DPI / print size.`; w.style.display='block'; } else { expEl.textContent=o.wPx.toLocaleString()+' × '+o.hPx.toLocaleString()+' px (full resolution)'; expEl.style.color='#00c853'; w.style.display='none'; } if(o.wPx*o.hPx>40e6 || longEdge>6000){ w2.textContent='⚠ Large exports may use significant memory and could be slow on older devices or mobile browsers. Keep this tab active while generating.'; w2.style.display='block'; } else { w2.style.display='none' } }

  // expose a destroy function to clean up listeners if needed
  return function destroy(){
    try{
      // remove registered listeners
      _listeners.forEach(([el, evt, fn])=>{ try{ el.removeEventListener(evt, fn) }catch(e){} })
      // clear sbtn handlers
      _sButtons.forEach(b=>{ try{ b.onclick = null; b.removeAttribute && b.removeAttribute('onclick') }catch(e){} })
      // clear references
      _listeners.length = 0; _sButtons.length = 0
    }catch(e){ console.error('[print-tool] destroy error', e) }
  }
}
