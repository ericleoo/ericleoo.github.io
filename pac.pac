
/*
** automatic proxy configuration for 10.97.2.60 from proxyconf.my-it-solutions.net
*/

function FindProxyForURL(url, host) {

 if ( shExpMatch(host, "localhost") ) { return "DIRECT"; }
 if ( shExpMatch(host, "localhost.*") ) { return "DIRECT"; }
 if ( shExpMatch(host, "127.0.0.*") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.intra") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.local") ) { return "DIRECT"; }
 if ( isPlainHostName(host) ) { return "DIRECT"; }

 if ( shExpMatch(host, "*.fsc.net") ) { return "PROXY 10.92.39.2:81"; }
 if ( shExpMatch(host, "*.fsc.s-partners.net") ) { return "PROXY 10.92.39.2:81"; }
 if ( shExpMatch(host, "*.fts.net") ) { return "PROXY 10.92.39.2:81"; }
 if ( shExpMatch(host, "*.fujitsu.local") ) { return "PROXY 10.92.39.2:81"; }
 if ( shExpMatch(host, "mydesk*.morganstanley.com") ) { return "PROXY proxy-us.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "tier2*.mydesk*.morganstanley.com") ) { return "PROXY proxy-us.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "rctscsg.ms.com") ) { return "PROXY proxy-us.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "remote-us-dr.mcgraw-hill.com") ) { return "PROXY proxy-us.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "remote-us.mcgraw-hill.com") ) { return "PROXY proxy-us.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "remote-sg.mcgraw-hill.com") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "remote-uk.mcgraw-hill.com") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "bsaportal.bfusa.com") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "devbsaportal.bfusa.com") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "gateway.tsa.slb.com") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "portal.stahl.com") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "remoteaccess.argenta.be") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "nsntxsbx.it-solutions.atos.net") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "nsntxdev.it-solutions.atos.net") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "nsntxacc.it-solutions.atos.net") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "web.ibb.de") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "partners.hubtotal.net") ) { return "PROXY proxy-fr.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "gateway.slb.com") ) { return "PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "intrafrx-ny.frx.com") ) { return "PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "intrafrx-stl.frx.com") ) { return "PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "nsnsiacc.service-now.com") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "nsnsi.service-now.com") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "mekong.atosifc.com") ) { return "PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "vpn02.banksys.be") ) { return "PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "marketdata.sfs.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace-search.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01015.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01014.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "pkgph10d.eps.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ors.its.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ixospamc.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap08043.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "penlo-med.eps.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "scd.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "scd.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cfib.cf.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace.automation.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "access.siemens.com.au") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acdc.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "administration.dc4ca.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "admin.pkisupport.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ads.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "azm.neut.siemens.at") ) { return "DIRECT"; }
 if ( shExpMatch(host, "azur.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cmd.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "corina.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cpo.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cpo-staging.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cpps.eps.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "crsp2.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "crsp-portal-malvern.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "crsp-release.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "crsp-reporting.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cti-dlf.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cti-erl.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cti.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "deerls7eba.ww007.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "dkbdkb7ema.ww007.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "dkbdkb7ena.ww007.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ebasm1.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "email.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "flake.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "flexsm.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "home.siemens-pse.sk") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.cee.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.energy-ots.siemens.co.in") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.macs.siemens.co.in") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.nwe.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.smw-test.cc.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.ueasy.siemens.co.th") ) { return "DIRECT"; }
 if ( shExpMatch(host, "i-web.it-solutions.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "mosaic53.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "owa.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "saldojobs2.sbs.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "scdwebgid.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sso.cpo.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sso.cpo-staging.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "svn.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ttp.cit.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "webmail.pg.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "webmail.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "wiki.healthcare.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workplace.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace.siemens.co.in") ) { return "DIRECT"; }
 if ( shExpMatch(host, "wsol.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "esp.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "esp.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "senes.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "catsntravel-amcnwe.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ees.mch.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "webapps.ct.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "epm-service.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "frodo.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cms1.rd.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cps.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "erlm5cca.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intra.siemens.nl") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.siemens.co.uk") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01304.eps.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace.nwe.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace.siemens.co.uk") ) { return "DIRECT"; }
 if ( shExpMatch(host, "entitlement.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "lte-test.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "entitlement.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.saf.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace.ct.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.gpportal.it-solutions.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "chs.ww005.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.swe.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.ps.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.gss.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "training.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.domain-names.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.ger.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "mhpa4ehc.mch.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "aperture.siemens.it") ) { return "DIRECT"; }
 if ( shExpMatch(host, "apex.cio.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "aunz.siemens.com.au") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.sfs.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.siemens.ru") ) { return "DIRECT"; }
 if ( shExpMatch(host, "livelink.siemens.ru") ) { return "DIRECT"; }
 if ( shExpMatch(host, "pct.sfs.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sp-01.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "teamweb.industry.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ttp.sfs.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace-q.sfs.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace-q.ww300.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace.sfs.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.editorswww.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "esp-siemens.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "e-apps.ito.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "hcp-ci.sie.siemens.at") ) { return "DIRECT"; }
 if ( shExpMatch(host, "share-emea.med.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "share-apac.med.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*-share.healthcare.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.smshsc.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "etd-jwp.eps.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "moss.healthcare.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sharepoint.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "gama.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "portal.medical.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "pkgbsp0d.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cobp.automation.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cobauth.ww004.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "medpoolp41.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "medpooli41.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap.med.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "saperion.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workflow.sfs.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "castor.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "gdesk.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "clarityforecasting.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.int.atosorigin.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.ao-srv.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "scman.mch.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ict.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ict-qa.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "hrs-ibi.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "pct.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "hrsdirx.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "bpc.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "bpcdev.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "bpctest.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "bpcsandbox.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "vendoraccess.hewitt.com") ) { return "PROXY 192.251.177.250:80"; }
 if ( shExpMatch(host, "accountmanagement.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "demchdc30pa.ww500.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.res.bdc-services.net") ) { return "PROXY 10.93.196.62:3128"; }
 if ( shExpMatch(host, "*.nms.bdc-services.net") ) { return "PROXY 10.93.196.62:3128"; }
 if ( shExpMatch(host, "*.wd014a.net") ) { return "PROXY 10.93.196.62:3128"; }
 if ( shExpMatch(host, "teamraum.rag.de") ) { return "PROXY 10.93.196.62:3128"; }
 if ( shExpMatch(host, "ldb.ads.gagfah.de") ) { return "PROXY 10.93.196.62:3128"; }
 if ( shExpMatch(host, "ldb.sgremote.stg") ) { return "PROXY 10.93.196.62:3128"; }
 if ( shExpMatch(host, "nets146a-1.ww300.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "smt-test.energy.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.nsn-intra.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.nsn-net.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.inside.nokiasiemensnetworks.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "atvies9912ssrv.ww300.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "simeacms.siemens.at") ) { return "DIRECT"; }
 if ( shExpMatch(host, "139.25.231.70") ) { return "DIRECT"; }
 if ( shExpMatch(host, "139.25.233.58") ) { return "DIRECT"; }
 if ( shExpMatch(host, "139.25.233.59") ) { return "DIRECT"; }
 if ( shExpMatch(host, "139.25.234.103") ) { return "DIRECT"; }
 if ( shExpMatch(host, "139.25.237.110") ) { return "DIRECT"; }
 if ( shExpMatch(host, "139.25.240.13") ) { return "DIRECT"; }
 if ( shExpMatch(host, "139.25.240.134") ) { return "DIRECT"; }
 if ( shExpMatch(host, "139.25.240.15") ) { return "DIRECT"; }
 if ( shExpMatch(host, "click4xpress-test.cit.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "click4xpress.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "demchlb110x.lb4ca.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "freia-test.cit.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "www.freia.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "webmail-emea.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.116.87") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.116.68") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.118.99") ) { return "DIRECT"; }
 if ( shExpMatch(host, "abctest2.eplus.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.118.116") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intra.industry.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.sbt.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "soc.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.w1.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.112.23") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.118.32") ) { return "DIRECT"; }
 if ( shExpMatch(host, "pwblb100.ds.server.dom") ) { return "DIRECT"; }
 if ( shExpMatch(host, "dwbaps60.ds.server.dom") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.116.14") ) { return "DIRECT"; }
 if ( shExpMatch(host, "jira.bdc-services.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "hrsdirx-test.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.112.12") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.112.18") ) { return "DIRECT"; }
 if ( shExpMatch(host, "nsnrmt-web.access.nokiasiemensnetworks.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "inside.nokiasiemensnetworks.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.112.25") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01108.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "secureaccess.nike.com") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "194.8.116.82") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.118.95") ) { return "DIRECT"; }
 if ( shExpMatch(host, "extranet.volkswagen.com.br") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.105.241") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.174.147.196") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01109.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01236.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cnpek01283.cn001.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.120.177") ) { return "DIRECT"; }
 if ( shExpMatch(host, "194.8.120.178") ) { return "DIRECT"; }
 if ( shExpMatch(host, "citrix.base.be") ) { return "PROXY proxystep.rsrc.be.local:8080"; }
 if ( shExpMatch(host, "sap01237.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01238.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01107.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "spnlapl00005ext3.itc.intranet") ) { return "PROXY 161.89.48.219:8080"; }
 if ( shExpMatch(host, "spnlapl00005ext5.itc.intranet") ) { return "PROXY 161.89.48.219:8080"; }
 if ( shExpMatch(host, "spnlapl00008ext3.itc.intranet") ) { return "PROXY 161.89.113.161:8080"; }
 if ( shExpMatch(host, "spnlapl00008ext5.itc.intranet") ) { return "PROXY 161.89.113.161:8080"; }
 if ( shExpMatch(host, "inside.nsn.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.inside.nsn.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "uratest-eu.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ura-eu.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ura-fr.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ura-latam.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ura-in.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "portal-login-dev.cf.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "portal-login-prod.cf.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.net.atos-infogerance.fr") ) { return "PROXY aofrugw201.atos-infogerance.fr:8080"; }
 if ( shExpMatch(host, "*.net.ms.fr.atosorigin.com") ) { return "PROXY aofrugw202.atos-infogerance.fr:8080"; }
 if ( shExpMatch(host, "*.atos-infogerance.fr") ) { return "DIRECT"; }
 if ( shExpMatch(host, "55.12.2.12") ) { return "DIRECT"; }
 if ( shExpMatch(host, "nsnrmt-web.access.nsn.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "idprove.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "idprovestg.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "mirrorstg.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "misaplicaciones.es.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "monbsi.fr.myatos.net") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "covoiturage.fr.myatos.net") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "yatta.fr.myatos.net") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "*.fr.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.ftgroup") ) { return "DIRECT"; }
 if ( shExpMatch(host, "citrix-sif-dev.aviation-civile.gouv.fr") ) { return "DIRECT"; }
 if ( shExpMatch(host, "csg.aviation-civile.gouv.fr") ) { return "DIRECT"; }
 if ( shExpMatch(host, "am7450.fr.int.atosorigin.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "195.220.*") ) { return "DIRECT"; }
 if ( shExpMatch(host, "193.56.241.157") ) { return "DIRECT"; }
 if ( shExpMatch(host, "156.150.236.*") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cerbere.airbus.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "arex-fr.airbus.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "symphonie-dev-hpqc.reseau.intra.laposte.fr") ) { return "PROXY 55.6.40.2:8080"; }
 if ( shExpMatch(host, "*.esoc.esa.int") ) { return "PROXY 55.1.35.228:8080"; }
 if ( shExpMatch(host, "*.atosfusion.fr") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.toulouse.it.atosorigin.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.airbus.it.atosorigin.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.ft.it.atosorigin.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.francetelecom.fr") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.airbus.corp") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.airbus-v.corp") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.dsna-dti.aviation") ) { return "DIRECT"; }
 if ( shExpMatch(host, "55.1.39.126") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.lyon.si.fr.atosorigin.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.adc.sitree.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "finance.siemens.ru") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspaceqa-secure.sfs.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "applicationsqa-secure.sfs.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "workspace-secure.sfs.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "applications-secure.sfs.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "fs-auth.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01322.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.mvs.sitree.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.airbus.it.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.dmz.it.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.dmz.it.atosorigin.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.ft.it.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.dsna.aviation") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.cnqd.cnamts.fr") ) { return "DIRECT"; }
 if ( shExpMatch(host, "crsp1.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "dei10sigsrv.ww005.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "moss-us.healthcare.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "reporting.med.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "atvies26sx.sie.siemens.at") ) { return "DIRECT"; }
 if ( shExpMatch(host, "atvies26rx.sie.siemens.at") ) { return "DIRECT"; }
 if ( shExpMatch(host, "webmail-na.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "webmail-cee.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.grenoble.si.fr.atosorigin.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "application.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.kiloutou.ent.root") ) { return "DIRECT"; }
 if ( shExpMatch(host, "aom.bdc-services.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "edi-betrieb.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "remote.glasgow2014.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "vdesktop-emea.siemens.com") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "*.apac.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "www.cert.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "amc2.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sap01326.os.fth.sbs.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "gate-fr.airbus.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "xaas.fi.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "xaas-auth.fi.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "xaas-mgr.fi.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "xaas-web.fi.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "vcd01.fi.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "vcd01-con.fi.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "10.204.33.22") ) { return "PROXY 161.89.192.10:3128"; }
 if ( shExpMatch(host, "10.204.33.23") ) { return "PROXY 161.89.192.10:3128"; }
 if ( shExpMatch(host, "10.204.33.24") ) { return "PROXY 161.89.192.10:3128"; }
 if ( shExpMatch(host, "10.204.33.25") ) { return "PROXY 161.89.192.11:3128"; }
 if ( shExpMatch(host, "10.204.33.26") ) { return "PROXY 161.89.192.11:3128"; }
 if ( shExpMatch(host, "10.204.33.27") ) { return "PROXY 161.89.192.11:3128"; }
 if ( shExpMatch(host, "10.204.65.22") ) { return "PROXY 161.89.194.10:3128"; }
 if ( shExpMatch(host, "10.204.65.23") ) { return "PROXY 161.89.194.10:3128"; }
 if ( shExpMatch(host, "10.204.65.24") ) { return "PROXY 161.89.194.10:3128"; }
 if ( shExpMatch(host, "10.204.65.25") ) { return "PROXY 161.89.194.11:3128"; }
 if ( shExpMatch(host, "10.204.65.26") ) { return "PROXY 161.89.194.11:3128"; }
 if ( shExpMatch(host, "10.204.65.27") ) { return "PROXY 161.89.194.11:3128"; }
 if ( shExpMatch(host, "10.204.66.56") ) { return "PROXY 161.89.194.67:3128"; }
 if ( shExpMatch(host, "*.int.net.nokia.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "hfm.bull.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "oasis-v3.bull.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "crm.ad.bull.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.icmms.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cj01.erlm.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "146.254.235.13") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.ccpdev.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "146.254.235.15") ) { return "DIRECT"; }
 if ( shExpMatch(host, "146.254.235.18") ) { return "DIRECT"; }
 if ( shExpMatch(host, "crsp-dw.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "ccpdev.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "pki.rs.entitlement.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cnpek01284.cn001.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "hanvisning.se.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "epaytest.uk.atos.net") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "workspace.c7.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "lyncdiscoverinternal.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "pwdchgr.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "server-certificates.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.priv.atos.fr") ) { return "PROXY 55.16.242.224:3128"; }
 if ( shExpMatch(host, "workspace.basic.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cnpek01285.cn001.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "qc-hit01.healthcare.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "atos365-my.sharepoint.com") ) { return "PROXY 10.89.0.73:84"; }
 if ( shExpMatch(host, "nacsg01.na.jnj.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "emeacsg01.eu.jnj.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "nacsg02.na.jnj.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "emeacsg02.eu.jnj.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "138.69.215.206") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cio.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "netmri-ito.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "fratf.fr.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.fratf.fr.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "138.69.246.109") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sitescandr.ito-na.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sitescan.ito-na.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "aiqair.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "accessa.aetna.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "basadmin.corp.xerox.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "basadmin10.corp.xerox.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsreports.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "13.129.59.160") ) { return "DIRECT"; }
 if ( shExpMatch(host, "a1dal1swputil02.americas.oneacs.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdalrsa-pri.net.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem23.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "emmadmin.corp.xerox.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "lockout.corp.xerox.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "xww.s3.world.xerox.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem23.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem26.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acspem70.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "noc.ecc.acsonline.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sevone-ito.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "sevone-xim.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "usa0300vm852.na.xerox.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "nettools.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "13.129.81.109") ) { return "DIRECT"; }
 if ( shExpMatch(host, "careers.myatos.net") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "nsodem700.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "bluecat.nike.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "syslog-ito.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem20.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem21.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem42.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem43.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem44.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acsdem45.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "acspem42.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "gskdem40.acs-inc.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "vpn01.banksys.be") ) { return "DIRECT"; }
 if ( shExpMatch(host, "infoblox-ito.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "pathview-ito.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "nettools.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.ura.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "partners.pfizer.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "epm4qa.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.raws.de.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "p2-bw-qa.eps.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "top.br.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "vchat.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "smartdesktop.wiganmbc.gov.uk") ) { return "DIRECT"; }
 if ( shExpMatch(host, "smartdesktop.bolton.gov.uk") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.webedi.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "adp.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "svm.cert.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "nic.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "nic-test.siemens.net") ) { return "DIRECT"; }
 if ( shExpMatch(host, "138.69.212.177") ) { return "DIRECT"; }
 if ( shExpMatch(host, "138.69.207.151") ) { return "DIRECT"; }
 if ( shExpMatch(host, "virtual-services.ext.nokia.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "intranet.for.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "*.panaya.com") ) { return "PROXY proxy-fr.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "ibtest.mchp.siemens.de") ) { return "DIRECT"; }
 if ( shExpMatch(host, "cag.siemensmetering.co.uk") ) { return "PROXY proxy-de.glb.my-it-solutions.net:84"; }
 if ( shExpMatch(host, "damex.siemens.com") ) { return "DIRECT"; }
 if ( shExpMatch(host, "jas-aad.opscenter.siemens.com") ) { return "DIRECT"; }

 if ( shExpMatch(host, "ura-na.it-solutions.atos.net")
 || shExpMatch(host, "bps-eu.atos.net")
 || shExpMatch(host, "bps-na.atos.net")
 || shExpMatch(host, "bps-nam.siemens.com")
 || shExpMatch(host, "bps-apac.atos.net")
 || shExpMatch(host, "155.45.168.55")
 || shExpMatch(host, "155.45.168.56")
 || shExpMatch(host, "155.45.168.57")
 || shExpMatch(host, "155.45.168.58")
 || shExpMatch(host, "155.45.168.59")
 || shExpMatch(host, "155.45.168.60")
 || shExpMatch(host, "155.45.168.61")
 || shExpMatch(host, "155.45.168.62")
 || shExpMatch(host, "webedge-fth.it-solutions.atos.net")
 || shExpMatch(host, "avedge-fth.it-solutions.atos.net")
 || shExpMatch(host, "bpa-eu.atos.net")
 || shExpMatch(host, "bpa.atos.net")
 || shExpMatch(host, "charma.sinius.de")
 || shExpMatch(host, "reporting.sinius.de")
 || shExpMatch(host, "*.reporting.sinius.de")
 || shExpMatch(host, "bps-eu.siemens.com")
 || shExpMatch(host, "bps-apac.siemens.com")
 || shExpMatch(host, "bps-emea.siemens.com")
 || shExpMatch(host, "bps-dev.siemens.com")
 || shExpMatch(host, "bpa-dev.atos.net")
 || shExpMatch(host, "bps-dev.atos.net")
 || shExpMatch(host, "ura-uk.it-solutions.atos.net")
)
 return	"PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84";

 if ( shExpMatch(host,  "*.my-it-solutions.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "my-it-solutions.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.plbyd.pl.int") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "plbyd.pl.int") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.ansiview.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "ansiview.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.adminarea.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "adminarea.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.sinius.org") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "sinius.org") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.sinius.de") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "sinius.de") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.sinius.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "sinius.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.global-voip.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "global-voip.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.siemens-it-solutions.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "siemens-it-solutions.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.siemens-it-solutions.de") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "siemens-it-solutions.de") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.it-solutions.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "it-solutions.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.it-dienstleistung.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "it-dienstleistung.myatos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.atos-srv.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "atos-srv.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.cvc-global.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "cvc-global.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.ura.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "ura.atos-nao.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.ois.int") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "ois.int") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.corp.phns.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "corp.phns.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.thcfgi.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "thcfgi.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.ifferfsodp9ifjaposdfjhgosurijfaewrwergwea.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "ifferfsodp9ifjaposdfjhgosurijfaewrwergwea.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.ayylmaotjhsstasdfasdfasdfasdfasdfasdfasdf.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "ayylmaotjhsstasdfasdfasdfasdfasdfasdfasdf.com") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.internal.zone") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "internal.zone") ) { return "DIRECT"; }

 if ( shExpMatch(host,  "*.access.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "access.it-solutions.atos.net") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "*.fit.ch001.ch") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "fit.ch001.ch") ) { return "DIRECT"; }

 if ( shExpMatch(host,  "172.16.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.17.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.18.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.19.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.20.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.21.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.22.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.23.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.24.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.25.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.26.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.27.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.28.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.29.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.30.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "172.31.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "192.168.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "100.70.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "100.74.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "100.75.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "160.92.255.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "160.92.243.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "160.92.246.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "161.89.64.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "160.92.235.*") ) { return "DIRECT"; }
 if ( shExpMatch(host,  "161.89.65.*") ) { return "DIRECT"; }

 if (!isResolvable(host)) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 resolved_host = dnsResolve(host);
 if ( isInNet(resolved_host, "127.0.0.0","255.0.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.16.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.20.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.23.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.24.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.27.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.29.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.30.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "129.181.248.0","255.255.254.0") ) { return "PROXY 193.56.47.8:8080"; }
 if ( isInNet(resolved_host, "10.107.6.0","255.255.254.0") ) { return "PROXY 193.56.47.8:8080"; }
 if ( isInNet(resolved_host, "10.0.0.0","255.0.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.168.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "156.150.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "161.90.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "157.203.34.0","255.255.255.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.36.0","255.255.254.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.39.0","255.255.255.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.40.0","255.255.252.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.48.0","255.255.254.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.50.0","255.255.254.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.52.0","255.255.254.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.56.0","255.255.252.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.60.0","255.255.252.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.92.0","255.255.254.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.140.0","255.255.252.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.176.0","255.255.252.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.180.0","255.255.254.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.242.0","255.255.254.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.254.0","255.255.254.0") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "157.203.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "53.30.240.64","255.255.255.240") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "194.204.67.0","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "194.204.69.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "194.204.73.0","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "155.45.168.32","255.255.255.224") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "155.45.180.64","255.255.255.224") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "155.45.180.128","255.255.255.240") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "155.45.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "163.242.63.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "137.223.188.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "160.92.204.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "161.89.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.101.88.0","255.255.254.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.101.90.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "167.105.240.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "160.92.240.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "160.92.209.24","255.255.255.255") ) { return "PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84"; }
 if ( isInNet(resolved_host, "160.92.209.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "160.92.236.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "160.92.242.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.58.87.48","255.255.255.240") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "55.0.0.0","255.0.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "160.92.233.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "129.181.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "129.182.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "129.183.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "129.184.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "129.185.192.0","255.255.224.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "141.112.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.5.32.0","255.255.252.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.90.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.31.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.25.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "159.8.16.64","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "46.16.184.32","255.255.255.240") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "158.177.75.64","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "158.177.75.96","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "168.1.196.128","255.255.255.240") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "169.55.62.178","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "169.55.62.179","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "194.8.116.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.188.250.0","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.188.250.208","255.255.255.240") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.188.250.128","255.255.255.192") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.188.250.240","255.255.255.240") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.188.250.224","255.255.255.240") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "194.8.120.181","255.255.255.240") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "194.8.124.177","255.255.255.248") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.19.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.26.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.28.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.18.72.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.18.131.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.18.137.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.187.124.92","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.189.247.129","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.190.203.114","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.195.130.118","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.195.199.111","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.195.97.239","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.112.32","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.133.173","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.137.40","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.160.164","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.163.227","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.174.156","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.175.241","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.183.80","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.189.97","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.198.78.135","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.205.218.125","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.205.45.229","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.205.51.150","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.233.25.53","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.234.108.245","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.234.82.159","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.234.82.84","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.234.92.152","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.240.73.25","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.241.13.179","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.241.156.20","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.241.169.19","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.241.195.61","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.241.200.104","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.241.224.150","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.242.194.78","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.242.217.69","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.242.229.76","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.242.253.193","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.242.253.238","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "35.242.255.241","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "104.155.101.65","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "104.155.39.171","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "104.155.77.211","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "104.199.5.211","255.255.255.255") ) { return "DIRECT"; }


 return	"PROXY proxy-sg.glb.my-it-solutions.net:84; PROXY proxy-in.glb.my-it-solutions.net:84";

}
