export function Footer() {

  const iubendaPrivacyDocumentation = `
  <a href="https://www.iubenda.com/privacy-policy/21208842" class="font-semibold" title="Privacy">Privacy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
  `

  const iubendaCookieDocumentation = `
  <a href="https://www.iubenda.com/privacy-policy/21208842/cookie-policy" class="font-semibold" title="Cookie Policy">Cookie Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
  `

  return (
    <footer className="pb-10">
      <div className="border-t opacity-20 mb-10"></div>
      <div className="text-center">
        <p className="text-[16px]">Designed and built By Vittorio Gioda </p>
        <p className="text-[16px]">2023 - Turin, Italy</p>
        <p className="text-[16px]">P.IVA 12879240013</p>
        <div class="my-2" dangerouslySetInnerHTML={{ __html: iubendaPrivacyDocumentation }}></div>
        <div class="my-2" dangerouslySetInnerHTML={{ __html: iubendaCookieDocumentation }}></div>
      </div>
      {/* </div>
      </div>*/}
    </footer>
  )
}