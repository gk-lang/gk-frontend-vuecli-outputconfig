/*!
 * fi Series Web API JavaScript Library
 * Product: PFU Limited
 *
 * © PFU Limited 2018-2022
 * Version: 1.6.0.1
 */
(function() {

	window['fujitsu'] = {
		fiscanner: {}
	}
	
	Object.defineProperty(fujitsu.fiscanner, "adjustRGB", {
		get: function () {
			return fiHub.state.aRGB
		},
		set: function (v) {
			fiHub.state.aRGB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBB", {
		get: function () {
			return fiHub.state.aRB
		},
		set: function (v) {
			fiHub.state.aRB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBG", {
		get: function () {
			return fiHub.state.aRG
		},
		set: function (v) {
			fiHub.state.aRG = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBR", {
		get: function () {
			return fiHub.state.aRR
		},
		set: function (v) {
			fiHub.state.aRR = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "aDTCThreshold", {
		get: function () {
			return fiHub.state.aTho
		},
		set: function (v) {
			fiHub.state.aTho = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "aIQCNotice", {
		get: function () {
			return fiHub.state.aNo
		},
		set: function (v) {
			fiHub.state.aNo = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "autoBorderDetection", {
		get: function () {
			return fiHub.state.aBD
		},
		set: function (v) {
			fiHub.state.aBD = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "autoBright", {
		get: function () {
			return fiHub.state.aBr
		},
		set: function (v) {
			fiHub.state.aBr = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "automaticColorBackground", {
		get: function () {
			return fiHub.state.aCB
		},
		set: function (v) {
			fiHub.state.aCB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "automaticColorSensitivity", {
		get: function () {
			return fiHub.state.aCS
		},
		set: function (v) {
			fiHub.state.aCS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "automaticRotateMode", {
		get: function () {
			return fiHub.state.aRM
		},
		set: function (v) {
			fiHub.state.aRM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "automaticSenseMedium", {
		get: function () {
			return fiHub.state.aSM
		},
		set: function (v) {
			fiHub.state.aSM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "autoProfile", {
		get: function () {
			return fiHub.state.aPr
		},
		set: function (v) {
			fiHub.state.aPr = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "autoProfileSensitivity", {
		get: function () {
			return fiHub.state.aPS
		},
		set: function (v) {
			fiHub.state.aPS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "background", {
		get: function () {
			return fiHub.state.bGr
		},
		set: function (v) {
			fiHub.state.bGr = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "backgroundColor", {
		get: function () {
			return fiHub.state.bGrC
		},
		set: function (v) {
			fiHub.state.bGrC = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothing", {
		get: function () {
			return fiHub.state.bGrSi
		},
		set: function (v) {
			fiHub.state.bGrSi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothness", {
		get: function () {
			return fiHub.state.bGrSn
		},
		set: function (v) {
			fiHub.state.bGrSn = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "backgroundThreshold", {
		get: function () {
			return fiHub.state.bGrT
		},
		set: function (v) {
			fiHub.state.bGrT = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeDetection", {
		get: function () {
			return fiHub.state.bDe
		},
		set: function (v) {
			fiHub.state.bDe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeDirection", {
		get: function () {
			return fiHub.state.bDi
		},
		set: function (v) {
			fiHub.state.bDi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeMaxSearchPriorities", {
		get: function () {
			return fiHub.state.bMSP
		},
		set: function (v) {
			fiHub.state.bMSP = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeNotDetectionNotice", {
		get: function () {
			return fiHub.state.bNDN
		},
		set: function (v) {
			fiHub.state.bNDN = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeRegionLeft", {
		get: function () {
			return fiHub.state.bRLf
		},
		set: function (v) {
			fiHub.state.bRLf = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeRegionLength", {
		get: function () {
			return fiHub.state.bRLn
		},
		set: function (v) {
			fiHub.state.bRLn = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeRegionTop", {
		get: function () {
			return fiHub.state.bRTo
		},
		set: function (v) {
			fiHub.state.bRTo = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeRegionWidth", {
		get: function () {
			return fiHub.state.bRW
		},
		set: function (v) {
			fiHub.state.bRW = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeType", {
		get: function () {
			return fiHub.state.bTy
		},
		set: function (v) {
			fiHub.state.bTy = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "binding", {
		get: function () {
			return fiHub.state.bId
		},
		set: function (v) {
			fiHub.state.bId = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageIgnoreAreaSize", {
		get: function () {
			return fiHub.state.bPIAS
		},
		set: function (v) {
			fiHub.state.bPIAS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageNotice", {
		get: function () {
			return fiHub.state.bPN
		},
		set: function (v) {
			fiHub.state.bPN = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageSkip", {
		get: function () {
			return fiHub.state.bPS
		},
		set: function (v) {
			fiHub.state.bPS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageSkipMode", {
		get: function () {
			return fiHub.state.bPSM
		},
		set: function (v) {
			fiHub.state.bPSM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageSkipTabPage", {
		get: function () {
			return fiHub.state.bPSTP
		},
		set: function (v) {
			fiHub.state.bPSTP = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "brightness", {
		get: function() {
			return fiHub.state.bRn
		},
		set: function(v) {
			fiHub.state.bRn = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "carrierSheetClippingMode", {
		get: function () {
			return fiHub.state.cSCM
		},
		set: function (v) {
			fiHub.state.cSCM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "characterExtraction", {
		get: function () {
			return fiHub.state.cEx
		},
		set: function (v) {
			fiHub.state.cEx = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "characterExtractionMethod", {
		get: function () {
			return fiHub.state.cExM
		},
		set: function (v) {
			fiHub.state.cExM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "characterThickness", {
		get: function () {
			return fiHub.state.cTh
		},
		set: function (v) {
			fiHub.state.cTh = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "closeSourceUI", {
		get: function () {
			return fiHub.state.cSUI
		},
		set: function (v) {
			fiHub.state.cSUI = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproduction", {
		get: function () {
			return fiHub.state.cRe
		},
		set: function (v) {
			fiHub.state.cRe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionBrightness", {
		get: function () {
			return fiHub.state.cReB
		},
		set: function (v) {
			fiHub.state.cReB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionContrast", {
		get: function () {
			return fiHub.state.cReC
		},
		set: function (v) {
			fiHub.state.cReC = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionCustomGamma", {
		get: function () {
			return fiHub.state.cReCG
		},
		set: function (v) {
			fiHub.state.cReCG = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionHighlight", {
		get: function () {
			return fiHub.state.cReH
		},
		set: function (v) {
			fiHub.state.cReH = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionShadow", {
		get: function () {
			return fiHub.state.cReS
		},
		set: function (v) {
			fiHub.state.cReS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "compressionType", {
		get: function () {
			return fiHub.state.cTy
		},
		set: function (v) {
			fiHub.state.cTy = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "contrast", {
		get: function () {
			return fiHub.state.cTr
		},
		set: function (v) {
			fiHub.state.cTr = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "cropMarginSize", {
		get: function () {
			return fiHub.state.cMS
		},
		set: function (v) {
			fiHub.state.cMS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "cropPriority", {
		get: function () {
			return fiHub.state.cPr
		},
		set: function (v) {
			fiHub.state.cPr = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "customGamma", {
		get: function () {
			return fiHub.state.cGa
		},
		set: function (v) {
			fiHub.state.cGa = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "customPaperLength", {
		get: function () {
			return fiHub.state.cPL
		},
		set: function (v) {
			fiHub.state.cPL = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "customPaperWidth", {
		get: function () {
			return fiHub.state.cPW
		},
		set: function (v) {
			fiHub.state.cPW = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "customResolution", {
		get: function () {
			return fiHub.state.cRti
		},
		set: function (v) {
			fiHub.state.cRti = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "deskew", {
		get: function () {
			return fiHub.state.dKe
		},
		set: function (v) {
			fiHub.state.dKe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "deskewBackground", {
		get: function () {
			return fiHub.state.dKeB
		},
		set: function (v) {
			fiHub.state.dKeB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "deskewMode", {
		get: function () {
			return fiHub.state.dKeM
		},
		set: function (v) {
			fiHub.state.dKeM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorser", {
		get: function () {
			return fiHub.state.dEn
		},
		set: function (v) {
			fiHub.state.dEn = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserCountDirection", {
		get: function () {
			return fiHub.state.dEnCD
		},
		set: function (v) {
			fiHub.state.dEnCD = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserCounter", {
		get: function () {
			return fiHub.state.dEnC
		},
		set: function (v) {
			fiHub.state.dEnC = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserCountStep", {
		get: function () {
			return fiHub.state.dEnCS
		},
		set: function (v) {
			fiHub.state.dEnCS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserDirection", {
		get: function () {
			return fiHub.state.dEnDi
		},
		set: function (v) {
			fiHub.state.dEnDi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserString", {
		get: function () {
			return fiHub.state.dEnS
		},
		set: function (v) {
			fiHub.state.dEnS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserXOffset", {
		get: function () {
			return fiHub.state.dEnXO
		},
		set: function (v) {
			fiHub.state.dEnXO = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserYOffset", {
		get: function () {
			return fiHub.state.dEnYO
		},
		set: function (v) {
			fiHub.state.dEnYO = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "divideLongPage", {
		get: function () {
			return fiHub.state.dLPa
		},
		set: function (v) {
			fiHub.state.dLPa = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "dTCSensitivity", {
		get: function () {
			return fiHub.state.dSe
		},
		set: function (v) {
			fiHub.state.dSe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFiller", {
		get: function () {
			return fiHub.state.eFi
		},
		set: function (v) {
			fiHub.state.eFi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFillerBottom", {
		get: function () {
			return fiHub.state.eFiB
		},
		set: function (v) {
			fiHub.state.eFiB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFillerLeft", {
		get: function () {
			return fiHub.state.eFiL
		},
		set: function (v) {
			fiHub.state.eFiL = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFillerRight", {
		get: function () {
			return fiHub.state.eFiR
		},
		set: function (v) {
			fiHub.state.eFiR = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFillerTop", {
		get: function () {
			return fiHub.state.eFiT
		},
		set: function (v) {
			fiHub.state.eFiT = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeRepair", {
		get: function () {
			return fiHub.state.eRe
		},
		set: function (v) {
			fiHub.state.eRe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorser", {
		get: function () {
			return fiHub.state.eSe
		},
		set: function (v) {
			fiHub.state.eSe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserCountDirection", {
		get: function () {
			return fiHub.state.eSeCD
		},
		set: function (v) {
			fiHub.state.eSeCD = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserCounter", {
		get: function () {
			return fiHub.state.eSeCt
		},
		set: function (v) {
			fiHub.state.eSeCt = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserCountStep", {
		get: function () {
			return fiHub.state.eSeCS
		},
		set: function (v) {
			fiHub.state.eSeCS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserDialog", {
		get: function () {
			return fiHub.state.eSeDg
		},
		set: function (v) {
			fiHub.state.eSeDg = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserDirection", {
		get: function () {
			return fiHub.state.eSeDt
		},
		set: function (v) {
			fiHub.state.eSeDt = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserFont", {
		get: function () {
			return fiHub.state.eSeF
		},
		set: function (v) {
			fiHub.state.eSeF = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserOffset", {
		get: function () {
			return fiHub.state.eSeO
		},
		set: function (v) {
			fiHub.state.eSeO = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserString", {
		get: function () {
			return fiHub.state.eSeS
		},
		set: function (v) {
			fiHub.state.eSeS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "errorCode", {
		get: function () {
			return fiHub.state.eRCo
		},
	});
	Object.defineProperty(fujitsu.fiscanner, "fadingCompensation", {
		get: function () {
			return fiHub.state.fCom
		},
		set: function (v) {
			fiHub.state.fCom = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "fileCounter", {
		get: function () {
			return fiHub.state.fCou
		},
		set: function (v) {
			fiHub.state.fCou = v
		}
	});
	var fNa = "";
	Object.defineProperty(fujitsu.fiscanner, "fileName", {
		get: function () {
			return fNa
		},
		set: function (v) {
			fNa = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "fileType", {
		get: function () {
			return fiHub.state.fTy
		},
		set: function (v) {
			fiHub.state.fTy = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "filter", {
		get: function () {
			return fiHub.state.fIl
		},
		set: function (v) {
			fiHub.state.fIl = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "filterSaturationSensitivity", {
		get: function () {
			return fiHub.state.fIlSS
		},
		set: function (v) {
			fiHub.state.fIlSS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackDetection", {
		get: function () {
			return fiHub.state.fBD
		},
		set: function (v) {
			fiHub.state.fBD = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingEnabled", {
		get: function () {
			return fiHub.state.fBME
		},
		set: function (v) {
			fiHub.state.fBME = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingLocation", {
		get: function () {
			return fiHub.state.fBML
		},
		set: function (v) {
			fiHub.state.fBML = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingRotation", {
		get: function () {
			return fiHub.state.fBMR
		},
		set: function (v) {
			fiHub.state.fBMR = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingTarget", {
		get: function () {
			return fiHub.state.fBMT
		},
		set: function (v) {
			fiHub.state.fBMT = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingTargetMode", {
		get: function () {
			return fiHub.state.fBMTM
		},
		set: function (v) {
			fiHub.state.fBMTM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingTargetSize", {
		get: function () {
			return fiHub.state.fBMTS
		},
		set: function (v) {
			fiHub.state.fBMTS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "gamma", {
		get: function () {
			return fiHub.state.gAm
		},
		set: function (v) {
			fiHub.state.gAm = v
		}
	});
	var gFi = "";
	Object.defineProperty(fujitsu.fiscanner, "gammaFile", {
		get: function () {
			return gFi
		},
		set: function (v) {
			gFi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "halftone", {
		get: function () {
			return fiHub.state.hTo
		},
		set: function (v) {
			fiHub.state.hTo = v
		}
	});
	var hFi = "";
	Object.defineProperty(fujitsu.fiscanner, "halftoneFile", {
		get: function () {
			return hFi
		},
		set: function (v) {
			hFi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "highlight", {
		get: function () {
			return fiHub.state.hLi
		},
		set: function (v) {
			fiHub.state.hLi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "hwCompression", {
		get: function () {
			return fiHub.state.hCo
		},
		set: function (v) {
			fiHub.state.hCo = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "imageScanner", {
		get: function () {
			return fiHub.state.iSc
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "indicator", {
		get: function () {
			return fiHub.state.iNd
		},
		set: function (v) {
			fiHub.state.iNd = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "isExistsFB", {
		get: function () {
			return fiHub.state.iEFB
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "jobControl", {
		get: function () {
			return fiHub.state.jCo
		},
		set: function (v) {
			fiHub.state.jCo = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "jobControlMode", {
		get: function () {
			return fiHub.state.jCoM
		},
		set: function (v) {
			fiHub.state.jCoM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "jpegQuality", {
		get: function () {
			return fiHub.state.jQt
		},
		set: function (v) {
			fiHub.state.jQt = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "lengthDetection", {
		get: function () {
			return fiHub.state.lDe
		},
		set: function (v) {
			fiHub.state.lDe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "longPage", {
		get: function () {
			return fiHub.state.lPa
		},
		set: function (v) {
			fiHub.state.lPa = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "manualFeedMode", {
		get: function () {
			return fiHub.state.mFM
		},
		set: function (v) {
			fiHub.state.mFM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "mRZType", {
		get: function () {
			return fiHub.state.mRZT
		},
		set: function (v) {
			fiHub.state.mRZT = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "multiFeed", {
		get: function () {
			return fiHub.state.mFe
		},
		set: function (v) {
			fiHub.state.mFe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "multiFeedNotice", {
		get: function () {
			return fiHub.state.mFeN
		},
		set: function (v) {
			fiHub.state.mFeN = v
		}
	});	
	Object.defineProperty(fujitsu.fiscanner, "multiFeedModeChangeSize", {
		get: function () {
			return fiHub.state.mFeMCS
		},
		set: function (v) {
			fiHub.state.mFeMCS = v
		}
	});
	var mSDVM = "0"
	Object.defineProperty(fujitsu.fiscanner, "multiStreamDefaultValueMode", {
		get: function () {
			return mSDVM
		},
		set: function (v) {
			mSDVM = v
		}
	});
	var mSFNM = "0"
	Object.defineProperty(fujitsu.fiscanner, "multiStreamFileNameMode", {
		get: function () {
			return mSFNM
		},
		set: function (v) {
			mSFNM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "multiStreamMode", {
		get: function () {
			return fiHub.state.mSM
		},
		set: function (v) {
			fiHub.state.mSM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "noiseRejection", {
		get: function () {
			return fiHub.state.nRe
		},
		set: function (v) {
			fiHub.state.nRe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "orientation", {
		get: function () {
			return fiHub.state.oTa
		},
		set: function (v) {
			fiHub.state.oTa = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "overScan", {
		get: function () {
			return fiHub.state.oSc
		},
		set: function (v) {
			fiHub.state.oSc = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "overwrite", {
		get: function () {
			return fiHub.state.oWr
		},
		set: function (v) {
			fiHub.state.oWr = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "pageCount", {
		get: function () {
			return fiHub.state.pCo
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "paperProtection", {
		get: function () {
			return fiHub.state.pPr
		},
		set: function (v) {
			fiHub.state.pPr = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "paperSize", {
		get: function () {
			return fiHub.state.pSi
		},
		set: function (v) {
			fiHub.state.pSi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "paperSupply", {
		get: function () {
			return fiHub.state.pSu
		},
		set: function (v) {
			fiHub.state.pSu = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "passportDetection", {
		get: function () {
			return fiHub.state.pDe
		},
		set: function (v) {
			fiHub.state.pDe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "patchCodeDetection", {
		get: function () {
			return fiHub.state.pCDe
		},
		set: function (v) {
			fiHub.state.pCDe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "patchCodeDirection", {
		get: function () {
			return fiHub.state.pCDi
		},
		set: function (v) {
			fiHub.state.pCDi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "patchCodeType", {
		get: function () {
			return fiHub.state.pCTy
		},
		set: function (v) {
			fiHub.state.pCTy = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "patternRemoval", {
		get: function () {
			return fiHub.state.pRe
		},
		set: function (v) {
			fiHub.state.pRe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "pixelType", {
		get: function () {
			return fiHub.state.pTy
		},
		set: function (v) {
			fiHub.state.pTy = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "punchHoleRemoval", {
		get: function () {
			return fiHub.state.pHR
		},
		set: function (v) {
			fiHub.state.pHR = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "punchHoleRemovalMode", {
		get: function () {
			return fiHub.state.pHRM
		},
		set: function (v) {
			fiHub.state.pHRM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "regionLeft", {
		get: function () {
			return fiHub.state.rLef
		},
		set: function (v) {
			fiHub.state.rLef = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "regionLength", {
		get: function () {
			return fiHub.state.rLen
		},
		set: function (v) {
			fiHub.state.rLen = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "regionTop", {
		get: function () {
			return fiHub.state.rTo
		},
		set: function (v) {
			fiHub.state.rTo = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "regionWidth", {
		get: function () {
			return fiHub.state.rWi
		},
		set: function (v) {
			fiHub.state.rWi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "resolution", {
		get: function () {
			return fiHub.state.rTi
		},
		set: function (v) {
			fiHub.state.rTi = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "reverse", {
		get: function () {
			return fiHub.state.rEv
		},
		set: function (v) {
			fiHub.state.rEv = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "rotation", {
		get: function () {
			return fiHub.state.rOt
		},
		set: function (v) {
			fiHub.state.rOt = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "scanContinue", {
		get: function () {
			return fiHub.state.sCu
		},
		set: function (v) {
			fiHub.state.sCu = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "scanContinueMode", {
		get: function () {
			return fiHub.state.sCuM
		},
		set: function (v) {
			fiHub.state.sCuM = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "scanCount", {
		get: function () {
			return fiHub.state.sCnt
		},
		set: function (v) {
			fiHub.state.sCnt = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "scanMode", {
		get: function () {
			return fiHub.state.sCMo
		},
		set: function (v) {
			fiHub.state.sCMo = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sDTCSensitivity", {
		get: function () {
			return fiHub.state.sDSe
		},
		set: function (v) {
			fiHub.state.sDSe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sEE", {
		get: function () {
			return fiHub.state.sEE
		},
		set: function (v) {
			fiHub.state.sEE = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "selectOutputSize", {
		get: function () {
			return fiHub.state.sOS
		},
		set: function (v) {
			fiHub.state.sOS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "shadow", {
		get: function () {
			return fiHub.state.sHa
		},
		set: function (v) {
			fiHub.state.sHa = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sharpness", {
		get: function () {
			return fiHub.state.sNe
		},
		set: function (v) {
			fiHub.state.sNe = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "showSourceUI", {
		get: function () {
			return fiHub.state.sSUI
		},
		set: function (v) {
			fiHub.state.sSUI = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "silentMode", {
		get: function () {
			return fiHub.state.sIMo
		},
		set: function (v) {
			fiHub.state.sIMo = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "simpleSlicePatternRemoval", {
		get: function () {
			return fiHub.state.sSPP
		},
		set: function (v) {
			fiHub.state.sSPP = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "skipBlackPage", {
		get: function () {
			return fiHub.state.sBP
		},
		set: function (v) {
			fiHub.state.sBP = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "skipWhitePage", {
		get: function () {
			return fiHub.state.sWP
		},
		set: function (v) {
			fiHub.state.sWP = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sourceCurrentScan", {
		get: function () {
			return fiHub.state.sCS
		},
		set: function (v) {
			fiHub.state.sCS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sRGB", {
		get: function () {
			return fiHub.state.sRGB
		},
		set: function (v) {
			fiHub.state.sRGB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "synchronizationDigitalEndorser", {
		get: function () {
			return fiHub.state.sDEn
		},
		set: function (v) {
			fiHub.state.sDEn = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "threshold", {
		get: function () {
			return fiHub.state.tHo
		},
		set: function (v) {
			fiHub.state.tHo = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "twainDS", {
		get: function () {
			return fiHub.state.tDS
		},
		set: function (v) {
			fiHub.state.tDS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "twainDSAnyPort", {
		get: function () {
			return fiHub.state.tDSAP
		},
		set: function (v) {
			fiHub.state.tDSAP = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "undefinedScanning", {
		get: function () {
			return fiHub.state.uSc
		},
		set: function (v) {
			fiHub.state.uSc = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "unit", {
		get: function () {
			return fiHub.state.unit
		},
		set: function (v) {
			fiHub.state.unit = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "verticalLineReduction", {
		get: function () {
			return fiHub.state.vLR
		},
		set: function (v) {
			fiHub.state.vLR = v
		}
	});
	var aRGB1;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGB1", {
		get: function () {
			return aRGB1
		},
		set: function (v) {
			aRGB1 = v
		}
	});
	var aRB1;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBB1", {
		get: function () {
			return aRB1
		},
		set: function (v) {
			aRB1 = v
		}
	});
	var aRG1;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBG1", {
		get: function () {
			return aRG1
		},
		set: function (v) {
			aRG1 = v
		}
	});
	var aRR1;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBR1", {
		get: function () {
			return aRR1
		},
		set: function (v) {
			aRR1 = v
		}
	});
	var aTho1;
	Object.defineProperty(fujitsu.fiscanner, "aDTCThreshold1", {
		get: function () {
			return aTho1
		},
		set: function (v) {
			aTho1 = v
		}
	});
	var aBr1;
	Object.defineProperty(fujitsu.fiscanner, "autoBright1", {
		get: function () {
			return aBr1
		},
		set: function (v) {
			aBr1 = v
		}
	});
	var bGr1;
	Object.defineProperty(fujitsu.fiscanner, "background1", {
		get: function () {
			return bGr1
		},
		set: function (v) {
			bGr1 = v
		}
	});
	var bGrSi1;
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothing1", {
		get: function () {
			return bGrSi1
		},
		set: function (v) {
			bGrSi1 = v
		}
	});
	var bGrSn1;
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothness1", {
		get: function () {
			return bGrSn1
		},
		set: function (v) {
			bGrSn1 = v
		}
	});
	var bGrT1;
	Object.defineProperty(fujitsu.fiscanner, "backgroundThreshold1", {
		get: function () {
			return bGrT1
		},
		set: function (v) {
			bGrT1 = v
		}
	});
	var bRn1;
	Object.defineProperty(fujitsu.fiscanner, "brightness1", {
		get: function () {
			return bRn1
		},
		set: function (v) {
			bRn1 = v
		}
	});
	var cEx1;
	Object.defineProperty(fujitsu.fiscanner, "characterExtraction1", {
		get: function () {
			return cEx1
		},
		set: function (v) {
			cEx1 = v
		}
	});
	var cExM1;
	Object.defineProperty(fujitsu.fiscanner, "characterExtractionMethod1", {
		get: function () {
			return cExM1
		},
		set: function (v) {
			cExM1 = v
		}
	});
	var cTh1;
	Object.defineProperty(fujitsu.fiscanner, "characterThickness1", {
		get: function () {
			return cTh1
		},
		set: function (v) {
			cTh1 = v
		}
	});
	var cRe1;
	Object.defineProperty(fujitsu.fiscanner, "colorReproduction1", {
		get: function () {
			return cRe1
		},
		set: function (v) {
			cRe1 = v
		}
	});
	var cReB1;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionBrightness1", {
		get: function () {
			return cReB1
		},
		set: function (v) {
			cReB1 = v
		}
	});
	var cReC1;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionContrast1", {
		get: function () {
			return cReC1
		},
		set: function (v) {
			cReC1 = v
		}
	});
	var cReCG1;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionCustomGamma1", {
		get: function () {
			return cReCG1
		},
		set: function (v) {
			cReCG1 = v
		}
	});
	var cReH1;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionHighlight1", {
		get: function () {
			return cReH1
		},
		set: function (v) {
			cReH1 = v
		}
	});
	var cReS1;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionShadow1", {
		get: function () {
			return cReS1
		},
		set: function (v) {
			cReS1 = v
		}
	});
	var cTy1;
	Object.defineProperty(fujitsu.fiscanner, "compressionType1", {
		get: function () {
			return cTy1
		},
		set: function (v) {
			cTy1 = v
		}
	});
	var cTr1;
	Object.defineProperty(fujitsu.fiscanner, "contrast1", {
		get: function () {
			return cTr1
		},
		set: function (v) {
			cTr1 = v
		}
	});
	var cGa1;
	Object.defineProperty(fujitsu.fiscanner, "customGamma1", {
		get: function () {
			return cGa1
		},
		set: function (v) {
			cGa1 = v
		}
	});
	var cRti1;
	Object.defineProperty(fujitsu.fiscanner, "customResolution1", {
		get: function () {
			return cRti1
		},
		set: function (v) {
			cRti1 = v
		}
	});
	var dSe1;
	Object.defineProperty(fujitsu.fiscanner, "dTCSensitivity1", {
		get: function () {
			return dSe1
		},
		set: function (v) {
			dSe1 = v
		}
	});
	var fCom1;
	Object.defineProperty(fujitsu.fiscanner, "fadingCompensation1", {
		get: function () {
			return fCom1
		},
		set: function (v) {
			fCom1 = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "fileCounter1", {
		get: function () {
			return fiHub.state.fCou1
		},
		set: function (v) {
			fiHub.state.fCou1 = v
		}
	});
	var fNa1 = "";
	Object.defineProperty(fujitsu.fiscanner, "fileName1", {
		get: function () {
			return fNa1
		},
		set: function (v) {
			fNa1 = v
		}
	});
	var fTy1;
	Object.defineProperty(fujitsu.fiscanner, "fileType1", {
		get: function () {
			return fTy1
		},
		set: function (v) {
			fTy1 = v
		}
	});
	var fIl1;
	Object.defineProperty(fujitsu.fiscanner, "filter1", {
		get: function () {
			return fIl1
		},
		set: function (v) {
			fIl1 = v
		}
	});
	var fIlSS1;
	Object.defineProperty(fujitsu.fiscanner, "filterSaturationSensitivity1", {
		get: function () {
			return fIlSS1
		},
		set: function (v) {
			fIlSS1 = v
		}
	});
	var gAm1;
	Object.defineProperty(fujitsu.fiscanner, "gamma1", {
		get: function () {
			return gAm1
		},
		set: function (v) {
			gAm1 = v
		}
	});
	var gFi1;
	Object.defineProperty(fujitsu.fiscanner, "gammaFile1", {
		get: function () {
			return gFi1
		},
		set: function (v) {
			gFi1 = v
		}
	});
	var hTo1;
	Object.defineProperty(fujitsu.fiscanner, "halftone1", {
		get: function () {
			return hTo1
		},
		set: function (v) {
			hTo1 = v
		}
	});
	var hFi1;
	Object.defineProperty(fujitsu.fiscanner, "halftoneFile1", {
		get: function () {
			return hFi1
		},
		set: function (v) {
			hFi1 = v
		}
	});
	var hLi1;
	Object.defineProperty(fujitsu.fiscanner, "highlight1", {
		get: function () {
			return hLi1
		},
		set: function (v) {
			hLi1 = v
		}
	});
	var nRe1;
	Object.defineProperty(fujitsu.fiscanner, "noiseRejection1", {
		get: function () {
			return nRe1
		},
		set: function (v) {
			nRe1 = v
		}
	});
	var pRe1;
	Object.defineProperty(fujitsu.fiscanner, "patternRemoval1", {
		get: function () {
			return pRe1
		},
		set: function (v) {
			pRe1 = v
		}
	});
	var pTy1;
	Object.defineProperty(fujitsu.fiscanner, "pixelType1", {
		get: function () {
			return pTy1
		},
		set: function (v) {
			pTy1 = v
		}
	});
	var rTi1;
	Object.defineProperty(fujitsu.fiscanner, "resolution1", {
		get: function () {
			return rTi1
		},
		set: function (v) {
			rTi1 = v
		}
	});
	var rEv1;
	Object.defineProperty(fujitsu.fiscanner, "reverse1", {
		get: function () {
			return rEv1
		},
		set: function (v) {
			rEv1 = v
		}
	});
	var sDSe1;
	Object.defineProperty(fujitsu.fiscanner, "sDTCSensitivity1", {
		get: function () {
			return sDSe1
		},
		set: function (v) {
			sDSe1 = v
		}
	});
	var sEE1;
	Object.defineProperty(fujitsu.fiscanner, "sEE1", {
		get: function () {
			return sEE1
		},
		set: function (v) {
			sEE1 = v
		}
	});
	var sHa1;
	Object.defineProperty(fujitsu.fiscanner, "shadow1", {
		get: function () {
			return sHa1
		},
		set: function (v) {
			sHa1 = v
		}
	});
	var sNe1;
	Object.defineProperty(fujitsu.fiscanner, "sharpness1", {
		get: function () {
			return sNe1
		},
		set: function (v) {
			sNe1 = v
		}
	});
	var sSPP1;
	Object.defineProperty(fujitsu.fiscanner, "simpleSlicePatternRemoval1", {
		get: function () {
			return sSPP1
		},
		set: function (v) {
			sSPP1 = v
		}
	});
	var sRGB1;
	Object.defineProperty(fujitsu.fiscanner, "sRGB1", {
		get: function () {
			return sRGB1
		},
		set: function (v) {
			sRGB1 = v
		}
	});
	var tHo1;
	Object.defineProperty(fujitsu.fiscanner, "threshold1", {
		get: function () {
			return tHo1
		},
		set: function (v) {
			tHo1 = v
		}
	});
	var aRGB2;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGB2", {
		get: function () {
			return aRGB2
		},
		set: function (v) {
			aRGB2 = v
		}
	});
	var aRB2;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBB2", {
		get: function () {
			return aRB2
		},
		set: function (v) {
			aRB2 = v
		}
	});
	var aRG2;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBG2", {
		get: function () {
			return aRG2
		},
		set: function (v) {
			aRG2 = v
		}
	});
	var aRR2;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBR2", {
		get: function () {
			return aRR2
		},
		set: function (v) {
			aRR2 = v
		}
	});
	var aTho2;
	Object.defineProperty(fujitsu.fiscanner, "aDTCThreshold2", {
		get: function () {
			return aTho2
		},
		set: function (v) {
			aTho2 = v
		}
	});
	var aBr2;
	Object.defineProperty(fujitsu.fiscanner, "autoBright2", {
		get: function () {
			return aBr2
		},
		set: function (v) {
			aBr2 = v
		}
	});
	var bGr2;
	Object.defineProperty(fujitsu.fiscanner, "background2", {
		get: function () {
			return bGr2
		},
		set: function (v) {
			bGr2 = v
		}
	});
	var bGrSi2;
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothing2", {
		get: function () {
			return bGrSi2
		},
		set: function (v) {
			bGrSi2 = v
		}
	});
	var bGrSn2;
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothness2", {
		get: function () {
			return bGrSn2
		},
		set: function (v) {
			bGrSn2 = v
		}
	});
	var bGrT2;
	Object.defineProperty(fujitsu.fiscanner, "backgroundThreshold2", {
		get: function () {
			return bGrT2
		},
		set: function (v) {
			bGrT2 = v
		}
	});
	var bRn2;
	Object.defineProperty(fujitsu.fiscanner, "brightness2", {
		get: function () {
			return bRn2
		},
		set: function (v) {
			bRn2 = v
		}
	});
	var cEx2;
	Object.defineProperty(fujitsu.fiscanner, "characterExtraction2", {
		get: function () {
			return cEx2
		},
		set: function (v) {
			cEx2 = v
		}
	});
	var cExM2;
	Object.defineProperty(fujitsu.fiscanner, "characterExtractionMethod2", {
		get: function () {
			return cExM2
		},
		set: function (v) {
			cExM2 = v
		}
	});
	var cTh2;
	Object.defineProperty(fujitsu.fiscanner, "characterThickness2", {
		get: function () {
			return cTh2
		},
		set: function (v) {
			cTh2 = v
		}
	});
	var cRe2;
	Object.defineProperty(fujitsu.fiscanner, "colorReproduction2", {
		get: function () {
			return cRe2
		},
		set: function (v) {
			cRe2 = v
		}
	});
	var cReB2;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionBrightness2", {
		get: function () {
			return cReB2
		},
		set: function (v) {
			cReB2 = v
		}
	});
	var cReC2;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionContrast2", {
		get: function () {
			return cReC2
		},
		set: function (v) {
			cReC2 = v
		}
	});
	var cReCG2;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionCustomGamma2", {
		get: function () {
			return cReCG2
		},
		set: function (v) {
			cReCG2 = v
		}
	});
	var cReH2;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionHighlight2", {
		get: function () {
			return cReH2
		},
		set: function (v) {
			cReH2 = v
		}
	});
	var cReS2;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionShadow2", {
		get: function () {
			return cReS2
		},
		set: function (v) {
			cReS2 = v
		}
	});
	var cTy2;
	Object.defineProperty(fujitsu.fiscanner, "compressionType2", {
		get: function () {
			return cTy2
		},
		set: function (v) {
			cTy2 = v
		}
	});
	var cTr2;
	Object.defineProperty(fujitsu.fiscanner, "contrast2", {
		get: function () {
			return cTr2
		},
		set: function (v) {
			cTr2 = v
		}
	});
	var cGa2;
	Object.defineProperty(fujitsu.fiscanner, "customGamma2", {
		get: function () {
			return cGa2
		},
		set: function (v) {
			cGa2 = v
		}
	});
	var cRti2;
	Object.defineProperty(fujitsu.fiscanner, "customResolution2", {
		get: function () {
			return cRti2
		},
		set: function (v) {
			cRti2 = v
		}
	});
	var dSe2;
	Object.defineProperty(fujitsu.fiscanner, "dTCSensitivity2", {
		get: function () {
			return dSe2
		},
		set: function (v) {
			dSe2 = v
		}
	});
	var fCom2;
	Object.defineProperty(fujitsu.fiscanner, "fadingCompensation2", {
		get: function () {
			return fCom2
		},
		set: function (v) {
			fCom2 = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "fileCounter2", {
		get: function () {
			return fiHub.state.fCou2
		},
		set: function (v) {
			fiHub.state.fCou2 = v
		}
	});
	var fNa2 = "";
	Object.defineProperty(fujitsu.fiscanner, "fileName2", {
		get: function () {
			return fNa2
		},
		set: function (v) {
			fNa2 = v
		}
	});
	var fTy2;
	Object.defineProperty(fujitsu.fiscanner, "fileType2", {
		get: function () {
			return fTy2
		},
		set: function (v) {
			fTy2 = v
		}
	});
	var fIl2;
	Object.defineProperty(fujitsu.fiscanner, "filter2", {
		get: function () {
			return fIl2
		},
		set: function (v) {
			fIl2 = v
		}
	});
	var fIlSS2;
	Object.defineProperty(fujitsu.fiscanner, "filterSaturationSensitivity2", {
		get: function () {
			return fIlSS2
		},
		set: function (v) {
			fIlSS2 = v
		}
	});
	var gAm2;
	Object.defineProperty(fujitsu.fiscanner, "gamma2", {
		get: function () {
			return gAm2
		},
		set: function (v) {
			gAm2 = v
		}
	});
	var gFi2;
	Object.defineProperty(fujitsu.fiscanner, "gammaFile2", {
		get: function () {
			return gFi2
		},
		set: function (v) {
			gFi2 = v
		}
	});
	var hTo2;
	Object.defineProperty(fujitsu.fiscanner, "halftone2", {
		get: function () {
			return hTo2
		},
		set: function (v) {
			hTo2 = v
		}
	});
	var hFi2;
	Object.defineProperty(fujitsu.fiscanner, "halftoneFile2", {
		get: function () {
			return hFi2
		},
		set: function (v) {
			hFi2 = v
		}
	});
	var hLi2;
	Object.defineProperty(fujitsu.fiscanner, "highlight2", {
		get: function () {
			return hLi2
		},
		set: function (v) {
			hLi2 = v
		}
	});
	var nRe2;
	Object.defineProperty(fujitsu.fiscanner, "noiseRejection2", {
		get: function () {
			return nRe2
		},
		set: function (v) {
			nRe2 = v
		}
	});
	var pRe2;
	Object.defineProperty(fujitsu.fiscanner, "patternRemoval2", {
		get: function () {
			return pRe2
		},
		set: function (v) {
			pRe2 = v
		}
	});
	var pTy2;
	Object.defineProperty(fujitsu.fiscanner, "pixelType2", {
		get: function () {
			return pTy2
		},
		set: function (v) {
			pTy2 = v
		}
	});
	var rTi2;
	Object.defineProperty(fujitsu.fiscanner, "resolution2", {
		get: function () {
			return rTi2
		},
		set: function (v) {
			rTi2 = v
		}
	});
	var rEv2;
	Object.defineProperty(fujitsu.fiscanner, "reverse2", {
		get: function () {
			return rEv2
		},
		set: function (v) {
			rEv2 = v
		}
	});
	var sDSe2;
	Object.defineProperty(fujitsu.fiscanner, "sDTCSensitivity2", {
		get: function () {
			return sDSe2
		},
		set: function (v) {
			sDSe2 = v
		}
	});
	var sEE2;
	Object.defineProperty(fujitsu.fiscanner, "sEE2", {
		get: function () {
			return sEE2
		},
		set: function (v) {
			sEE2 = v
		}
	});
	var sHa2;
	Object.defineProperty(fujitsu.fiscanner, "shadow2", {
		get: function () {
			return sHa2
		},
		set: function (v) {
			sHa2 = v
		}
	});
	var sNe2;
	Object.defineProperty(fujitsu.fiscanner, "sharpness2", {
		get: function () {
			return sNe2
		},
		set: function (v) {
			sNe2 = v
		}
	});
	var sSPP2;
	Object.defineProperty(fujitsu.fiscanner, "simpleSlicePatternRemoval2", {
		get: function () {
			return sSPP2
		},
		set: function (v) {
			sSPP2 = v
		}
	});
	var sRGB2;
	Object.defineProperty(fujitsu.fiscanner, "sRGB2", {
		get: function () {
			return sRGB2
		},
		set: function (v) {
			sRGB2 = v
		}
	});
	var tHo2;
	Object.defineProperty(fujitsu.fiscanner, "threshold2", {
		get: function () {
			return tHo2
		},
		set: function (v) {
			tHo2 = v
		}
	});
	var aRGB3;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGB3", {
		get: function () {
			return aRGB3
		},
		set: function (v) {
			aRGB3 = v
		}
	});
	var aRB3;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBB3", {
		get: function () {
			return aRB3
		},
		set: function (v) {
			aRB3 = v
		}
	});
	var aRG3;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBG3", {
		get: function () {
			return aRG3
		},
		set: function (v) {
			aRG3 = v
		}
	});
	var aRR3;
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBR3", {
		get: function () {
			return aRR3
		},
		set: function (v) {
			aRR3 = v
		}
	});
	var aTho3;
	Object.defineProperty(fujitsu.fiscanner, "aDTCThreshold3", {
		get: function () {
			return aTho3
		},
		set: function (v) {
			aTho3 = v
		}
	});
	var aBr3;
	Object.defineProperty(fujitsu.fiscanner, "autoBright3", {
		get: function () {
			return aBr3
		},
		set: function (v) {
			aBr3 = v
		}
	});
	var bGr3;
	Object.defineProperty(fujitsu.fiscanner, "background3", {
		get: function () {
			return bGr3
		},
		set: function (v) {
			bGr3 = v
		}
	});
	var bGrSi3;
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothing3", {
		get: function () {
			return bGrSi3
		},
		set: function (v) {
			bGrSi3 = v
		}
	});
	var bGrSn3;
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothness3", {
		get: function () {
			return bGrSn3
		},
		set: function (v) {
			bGrSn3 = v
		}
	});
	var bGrT3;
	Object.defineProperty(fujitsu.fiscanner, "backgroundThreshold3", {
		get: function () {
			return bGrT3
		},
		set: function (v) {
			bGrT3 = v
		}
	});
	var bRn3;
	Object.defineProperty(fujitsu.fiscanner, "brightness3", {
		get: function () {
			return bRn3
		},
		set: function (v) {
			bRn3 = v
		}
	});
	var cEx3;
	Object.defineProperty(fujitsu.fiscanner, "characterExtraction3", {
		get: function () {
			return cEx3
		},
		set: function (v) {
			cEx3 = v
		}
	});
	var cExM3;
	Object.defineProperty(fujitsu.fiscanner, "characterExtractionMethod3", {
		get: function () {
			return cExM3
		},
		set: function (v) {
			cExM3 = v
		}
	});
	var cTh3;
	Object.defineProperty(fujitsu.fiscanner, "characterThickness3", {
		get: function () {
			return cTh3
		},
		set: function (v) {
			cTh3 = v
		}
	});
	var cRe3;
	Object.defineProperty(fujitsu.fiscanner, "colorReproduction3", {
		get: function () {
			return cRe3
		},
		set: function (v) {
			cRe3 = v
		}
	});
	var cReB3;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionBrightness3", {
		get: function () {
			return cReB3
		},
		set: function (v) {
			cReB3 = v
		}
	});
	var cReC3;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionContrast3", {
		get: function () {
			return cReC3
		},
		set: function (v) {
			cReC3 = v
		}
	});
	var cReCG3;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionCustomGamma3", {
		get: function () {
			return cReCG3
		},
		set: function (v) {
			cReCG3 = v
		}
	});
	var cReH3;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionHighlight3", {
		get: function () {
			return cReH3
		},
		set: function (v) {
			cReH3 = v
		}
	});
	var cReS3;
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionShadow3", {
		get: function () {
			return cReS3
		},
		set: function (v) {
			cReS3 = v
		}
	});
	var cTy3;
	Object.defineProperty(fujitsu.fiscanner, "compressionType3", {
		get: function () {
			return cTy3
		},
		set: function (v) {
			cTy3 = v
		}
	});
	var cTr3;
	Object.defineProperty(fujitsu.fiscanner, "contrast3", {
		get: function () {
			return cTr3
		},
		set: function (v) {
			cTr3 = v
		}
	});
	var cGa3;
	Object.defineProperty(fujitsu.fiscanner, "customGamma3", {
		get: function () {
			return cGa3
		},
		set: function (v) {
			cGa3 = v
		}
	});
	var cRti3;
	Object.defineProperty(fujitsu.fiscanner, "customResolution3", {
		get: function () {
			return cRti3
		},
		set: function (v) {
			cRti3 = v
		}
	});
	var dSe3;
	Object.defineProperty(fujitsu.fiscanner, "dTCSensitivity3", {
		get: function () {
			return dSe3
		},
		set: function (v) {
			dSe3 = v
		}
	});
	var fCom3;
	Object.defineProperty(fujitsu.fiscanner, "fadingCompensation3", {
		get: function () {
			return fCom3
		},
		set: function (v) {
			fCom3 = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "fileCounter3", {
		get: function () {
			return fiHub.state.fCou3
		},
		set: function (v) {
			fiHub.state.fCou3 = v
		}
	});
	var fNa3 = "";
	Object.defineProperty(fujitsu.fiscanner, "fileName3", {
		get: function () {
			return fNa3
		},
		set: function (v) {
			fNa3 = v
		}
	});
	var fTy3;
	Object.defineProperty(fujitsu.fiscanner, "fileType3", {
		get: function () {
			return fTy3
		},
		set: function (v) {
			fTy3 = v
		}
	});
	var fIl3;
	Object.defineProperty(fujitsu.fiscanner, "filter3", {
		get: function () {
			return fIl3
		},
		set: function (v) {
			fIl3 = v
		}
	});
	var fIlSS3;
	Object.defineProperty(fujitsu.fiscanner, "filterSaturationSensitivity3", {
		get: function () {
			return fIlSS3
		},
		set: function (v) {
			fIlSS3 = v
		}
	});
	var gAm3;
	Object.defineProperty(fujitsu.fiscanner, "gamma3", {
		get: function () {
			return gAm3
		},
		set: function (v) {
			gAm3 = v
		}
	});
	var gFi3;
	Object.defineProperty(fujitsu.fiscanner, "gammaFile3", {
		get: function () {
			return gFi3
		},
		set: function (v) {
			gFi3 = v
		}
	});
	var hTo3;
	Object.defineProperty(fujitsu.fiscanner, "halftone3", {
		get: function () {
			return hTo3
		},
		set: function (v) {
			hTo3 = v
		}
	});
	var hFi3;
	Object.defineProperty(fujitsu.fiscanner, "halftoneFile3", {
		get: function () {
			return hFi3
		},
		set: function (v) {
			hFi3 = v
		}
	});
	var hLi3;
	Object.defineProperty(fujitsu.fiscanner, "highlight3", {
		get: function () {
			return hLi3
		},
		set: function (v) {
			hLi3 = v
		}
	});
	var nRe3;
	Object.defineProperty(fujitsu.fiscanner, "noiseRejection3", {
		get: function () {
			return nRe3
		},
		set: function (v) {
			nRe3 = v
		}
	});
	var pRe3;
	Object.defineProperty(fujitsu.fiscanner, "patternRemoval3", {
		get: function () {
			return pRe3
		},
		set: function (v) {
			pRe3 = v
		}
	});
	var pTy3;
	Object.defineProperty(fujitsu.fiscanner, "pixelType3", {
		get: function () {
			return pTy3
		},
		set: function (v) {
			pTy3 = v
		}
	});
	var rTi3;
	Object.defineProperty(fujitsu.fiscanner, "resolution3", {
		get: function () {
			return rTi3
		},
		set: function (v) {
			rTi3 = v
		}
	});
	var rEv3;
	Object.defineProperty(fujitsu.fiscanner, "reverse3", {
		get: function () {
			return rEv3
		},
		set: function (v) {
			rEv3 = v
		}
	});
	var sDSe3;
	Object.defineProperty(fujitsu.fiscanner, "sDTCSensitivity3", {
		get: function () {
			return sDSe3
		},
		set: function (v) {
			sDSe3 = v
		}
	});
	var sEE3;
	Object.defineProperty(fujitsu.fiscanner, "sEE3", {
		get: function () {
			return sEE3
		},
		set: function (v) {
			sEE3 = v
		}
	});
	var sHa3;
	Object.defineProperty(fujitsu.fiscanner, "shadow3", {
		get: function () {
			return sHa3
		},
		set: function (v) {
			sHa3 = v
		}
	});
	var sNe3;
	Object.defineProperty(fujitsu.fiscanner, "sharpness3", {
		get: function () {
			return sNe3
		},
		set: function (v) {
			sNe3 = v
		}
	});
	var sSPP3;
	Object.defineProperty(fujitsu.fiscanner, "simpleSlicePatternRemoval3", {
		get: function () {
			return sSPP3
		},
		set: function (v) {
			sSPP3 = v
		}
	});
	var sRGB3;
	Object.defineProperty(fujitsu.fiscanner, "sRGB3", {
		get: function () {
			return sRGB3
		},
		set: function (v) {
			sRGB3 = v
		}
	});
	var tHo3;
	Object.defineProperty(fujitsu.fiscanner, "threshold3", {
		get: function () {
			return tHo3
		},
		set: function (v) {
			tHo3 = v
		}
	});

	var fiHub;
	var convertToBase64;
	var convertToBase64Ex;
	var convertToBlob;
	var deleteFile;
	var deleteFileEx;

	function $() {
		console.log("initiate.js library is called.");
	}

	function Initialize(c) {
		fiHub = c;
		fiHub.client.onConnected = function(id) {
			console.log("Establish a connection with the server" + " |" + id);
			if (typeof (eval(fiHub.client.OnScannerReady)) == "function") {
				console.log("fiHub.client.OnScannerReady defined");
				fiHub.client.OnScannerReady();
			}
			else {
				console.log("fiHub.client.OnScannerReady undefined");
			}
		}
		c.client.OnConvertToBase64 = OnConvertToBase64Adpter;
		c.client.OnConvertToBlob = OnConvertToBlobAdpter;
		c.client.OnDeleteFile = OnDeleteFileAdpter;
		c.client.OnConvertToBase64Ex = OnConvertToBase64ExAdpter;
		c.client.OnDeleteFileEx = OnDeleteFileExAdpter;
	}

	function SetTwainDSInfo() {
		console.info("SetTwainDSInfo start");
		return fiHub.server.setTwainDSInfo();
	}

	function SetSourceCurrentScan() {
		console.info("SetSourceCurrentScan start");
		return fiHub.server.setSourceCurrentScan();
	}

	function OpenScanner() {
		console.info("OpenScanner start");
		return fiHub.server.openScanner();
	}

	function OpenScanner2() {
		console.info("OpenScanner2 start");
		return fiHub.server.openScanner2();
	}

	function SelectSource() {
		console.info("SelectSource start");
		return fiHub.server.selectSource();
	}

	function StartScan() {
		console.info("StartScan start");

		var propertyObj = {};
		propertyObj.FileName = fNa;
		propertyObj.GammaFile = gFi;
		propertyObj.HalftoneFile = hFi;
		propertyObj.MultiStreamDefaultValueMode = mSDVM;
		propertyObj.MultiStreamFileNameMode = mSFNM;
		propertyObj.AdjustRGB1 = aRGB1;
		propertyObj.AdjustRGBB1 = aRB1;
		propertyObj.AdjustRGBG1 = aRG1;
		propertyObj.AdjustRGBR1 = aRR1;
		propertyObj.ADTCThreshold1 = aTho1;
		propertyObj.AutoBright1 = aBr1;
		propertyObj.Background1 = bGr1;
		propertyObj.BackgroundSmoothing1 = bGrSi1;
		propertyObj.BackgroundSmoothness1 = bGrSn1;
		propertyObj.BackgroundThreshold1 = bGrT1;
		propertyObj.Brightness1 = bRn1;
		propertyObj.CharacterExtraction1 = cEx1;
		propertyObj.CharacterExtractionMethod1 = cExM1;
		propertyObj.CharacterThickness1 = cTh1;
		propertyObj.ColorReproduction1 = cRe1;
		propertyObj.ColorReproductionBrightness1 = cReB1;
		propertyObj.ColorReproductionContrast1 = cReC1;
		propertyObj.ColorReproductionCustomGamma1 = cReCG1;
		propertyObj.ColorReproductionHighlight1 = cReH1;
		propertyObj.ColorReproductionShadow1 = cReS1;
		propertyObj.CompressionType1 = cTy1;
		propertyObj.Contrast1 = cTr1;
		propertyObj.CustomGamma1 = cGa1;
		propertyObj.CustomResolution1 = cRti1;
		propertyObj.DTCSensitivity1 = dSe1;
		propertyObj.FadingCompensation1 = fCom1;
		propertyObj.FileName1 = fNa1;
		propertyObj.FileType1 = fTy1;
		propertyObj.Filter1 = fIl1;
		propertyObj.FilterSaturationSensitivity1 = fIlSS1;
		propertyObj.Gamma1 = gAm1;
		propertyObj.GammaFile1 = gFi1;
		propertyObj.Halftone1 = hTo1;
		propertyObj.HalftoneFile1 = hFi1;
		propertyObj.Highlight1 = hLi1;
		propertyObj.NoiseRejection1 = nRe1;
		propertyObj.PatternRemoval1 = pRe1;
		propertyObj.PixelType1 = pTy1;
		propertyObj.Resolution1 = rTi1;
		propertyObj.Reverse1 = rEv1;
		propertyObj.SDTCSensitivity1 = sDSe1;
		propertyObj.SEE1 = sEE1;
		propertyObj.Shadow1 = sHa1;
		propertyObj.Sharpness1 = sNe1;
		propertyObj.SimpleSlicePatternRemoval1 = sSPP1;
		propertyObj.sRGB1 = sRGB1;
		propertyObj.Threshold1 = tHo1;

		propertyObj.AdjustRGB2 = aRGB2;
		propertyObj.AdjustRGBB2 = aRB2;
		propertyObj.AdjustRGBG2 = aRG2;
		propertyObj.AdjustRGBR2 = aRR2;
		propertyObj.ADTCThreshold2 = aTho2;
		propertyObj.AutoBright2 = aBr2;
		propertyObj.Background2 = bGr2;
		propertyObj.BackgroundSmoothing2 = bGrSi2;
		propertyObj.BackgroundSmoothness2 = bGrSn2;
		propertyObj.BackgroundThreshold2 = bGrT2;
		propertyObj.Brightness2 = bRn2;
		propertyObj.CharacterExtraction2 = cEx2;
		propertyObj.CharacterExtractionMethod2 = cExM2;
		propertyObj.CharacterThickness2 = cTh2;
		propertyObj.ColorReproduction2 = cRe2;
		propertyObj.ColorReproductionBrightness2 = cReB2;
		propertyObj.ColorReproductionContrast2 = cReC2;
		propertyObj.ColorReproductionCustomGamma2 = cReCG2;
		propertyObj.ColorReproductionHighlight2 = cReH2;
		propertyObj.ColorReproductionShadow2 = cReS2;
		propertyObj.CompressionType2 = cTy2;
		propertyObj.Contrast2 = cTr2;
		propertyObj.CustomGamma2 = cGa2;
		propertyObj.CustomResolution2 = cRti2;
		propertyObj.DTCSensitivity2 = dSe2;
		propertyObj.FadingCompensation2 = fCom2;
		propertyObj.FileName2 = fNa2;
		propertyObj.FileType2 = fTy2;
		propertyObj.Filter2 = fIl2;
		propertyObj.FilterSaturationSensitivity2 = fIlSS2;
		propertyObj.Gamma2 = gAm2;
		propertyObj.GammaFile2 = gFi2;
		propertyObj.Halftone2 = hTo2;
		propertyObj.HalftoneFile2 = hFi2;
		propertyObj.Highlight2 = hLi2;
		propertyObj.NoiseRejection2 = nRe2;
		propertyObj.PatternRemoval2 = pRe2;
		propertyObj.PixelType2 = pTy2;
		propertyObj.Resolution2 = rTi2;
		propertyObj.Reverse2 = rEv2;
		propertyObj.SDTCSensitivity2 = sDSe2;
		propertyObj.SEE2 = sEE2;
		propertyObj.Shadow2 = sHa2;
		propertyObj.Sharpness2 = sNe2;
		propertyObj.SimpleSlicePatternRemoval2 = sSPP2;
		propertyObj.sRGB2 = sRGB2;
		propertyObj.Threshold2 = tHo2;

		propertyObj.AdjustRGB3 = aRGB3;
		propertyObj.AdjustRGBB3 = aRB3;
		propertyObj.AdjustRGBG3 = aRG3;
		propertyObj.AdjustRGBR3 = aRR3;
		propertyObj.ADTCThreshold3 = aTho3;
		propertyObj.AutoBright3 = aBr3;
		propertyObj.Background3 = bGr3;
		propertyObj.BackgroundSmoothing3 = bGrSi3;
		propertyObj.BackgroundSmoothness3 = bGrSn3;
		propertyObj.BackgroundThreshold3 = bGrT3;
		propertyObj.Brightness3 = bRn3;
		propertyObj.CharacterExtraction3 = cEx3;
		propertyObj.CharacterExtractionMethod3 = cExM3;
		propertyObj.CharacterThickness3 = cTh3;
		propertyObj.ColorReproduction3 = cRe3;
		propertyObj.ColorReproductionBrightness3 = cReB3;
		propertyObj.ColorReproductionContrast3 = cReC3;
		propertyObj.ColorReproductionCustomGamma3 = cReCG3;
		propertyObj.ColorReproductionHighlight3 = cReH3;
		propertyObj.ColorReproductionShadow3 = cReS3;
		propertyObj.CompressionType3 = cTy3;
		propertyObj.Contrast3 = cTr3;
		propertyObj.CustomGamma3 = cGa3;
		propertyObj.CustomResolution3 = cRti3;
		propertyObj.DTCSensitivity3 = dSe3;
		propertyObj.FadingCompensation3 = fCom3;
		propertyObj.FileName3 = fNa3;
		propertyObj.FileType3 = fTy3;
		propertyObj.Filter3 = fIl3;
		propertyObj.FilterSaturationSensitivity3 = fIlSS3;
		propertyObj.Gamma3 = gAm3;
		propertyObj.GammaFile3 = gFi3;
		propertyObj.Halftone3 = hTo3;
		propertyObj.HalftoneFile3 = hFi3;
		propertyObj.Highlight3 = hLi3;
		propertyObj.NoiseRejection3 = nRe3;
		propertyObj.PatternRemoval3 = pRe3;
		propertyObj.PixelType3 = pTy3;
		propertyObj.Resolution3 = rTi3;
		propertyObj.Reverse3 = rEv3;
		propertyObj.SDTCSensitivity3 = sDSe3;
		propertyObj.SEE3 = sEE3;
		propertyObj.Shadow3 = sHa3;
		propertyObj.Sharpness3 = sNe3;
		propertyObj.SimpleSlicePatternRemoval3 = sSPP3;
		propertyObj.sRGB3 = sRGB3;
		propertyObj.Threshold3 = tHo3;

		var jsonProperty = JSON.stringify(propertyObj);
		console.log(jsonProperty, fiHub.server, '663');
		return fiHub.server.startScan(jsonProperty);
	}

	function CloseScanner() {
		console.info("CloseScanner start");
		return fiHub.server.closeScanner();
	}
	
	function GetSourceCount() {
		console.info("GetSourceCount start");
		return fiHub.server.getSourceCount();
	}

	function GetTWAINTemplateCount() {
		console.info("GetTWAINTemplateCount start");
		return fiHub.server.getTWAINTemplateCount();
	}
	
	function GetSourceName(i) {
		console.info("GetSourceName start " + i);
		return fiHub.server.getSourceName(i);
	}

	function GetTWAINTemplateName(i) {
		console.info("GetTWAINTemplateName start " + i);
		return fiHub.server.getTWAINTemplateName(i);
	}

	function GetSourceSelect() {
		console.info("GetSourceSelect start");
		return fiHub.server.getSourceSelect();
	}

	function SetupDataSourceProperties() {
		console.info("SetupDataSourceProperties start");
		return fiHub.server.setupDataSourceProperties();
	}

	function GetTWAINTemplateSelect() {
		console.info("GetTWAINTemplateSelect start");
		return fiHub.server.getTWAINTemplateSelect();
	}

	function SelectSourceName(n) {
		console.info("SelectSourceName start");
		return fiHub.server.selectSourceName(n);
	}

	function SetTWAINTemplateSelect(n) {
		console.info("SetTWAINTemplateSelect start");
		return fiHub.server.setTWAINTemplateSelect(n);
	}

	function RegisterEvent(n, f) {
		console.info("RegisterEvent start");
		console.log(n, f, '999')
		if (n == "OnScannerReady") {
			fiHub.client.OnScannerReady = f;
		}
		else if (n == "OnScanToFile") {
			fiHub.client.OnScanToFile = f;
		}
		else if (n == "OnDetectBarcode") {
			fiHub.client.OnDetectBarcode = f;
		}
		else if (n == "OnDetectBarcodeDetail") {
			fiHub.client.OnDetectBarcodeDetail = f;
		}
		else if (n == "OnDetectPatchCode") {
			fiHub.client.OnDetectPatchCode = f;
		}
		else if (n == "OnDetectJobSeparator") {
			fiHub.client.OnDetectJobSeparator = f;
		}
		else if (n == "OnAIQCResult") {
			fiHub.client.OnAIQCResult = f;
		}
		else if (n == "OnBlankPageResult") {
			fiHub.client.OnBlankPageResult = f;
		}
		else if (n == "OnMultiFeedResult") {
			fiHub.client.OnMultiFeedResult = f;
		}
		else if (n == "OnPageNumber") {
			fiHub.client.OnPageNumber = f;
		}
		else if (n == "OnAutoProfileSelection") {
			fiHub.client.OnAutoProfileSelection = f;
		}
		else if (n == "OnPagePartition") {
			fiHub.client.OnPagePartition = f;
		}
		else if (n == "OnDetectPassport") {
			fiHub.client.OnDetectPassport = f;
		}
		else if (n == "OnDetectPassportEx") {
			fiHub.client.OnDetectPassportEx = f;
		}
	}
	
	function ConvertToBase64(d, e) {
		convertToBase64 = e;
		fiHub.server.convertToBase64(d);
	}
	
	function OnConvertToBase64Adpter(r, d) {
		console.info("OnConvertToBase64 " + r);
		convertToBase64(r,d);
	}
	
	function ConvertToBlob(d, e) {
		convertToBlob = e;
		fiHub.server.convertToBlob(d);
	}
	
	function OnConvertToBlobAdpter(r, d) {
		console.info("OnConvertToBlob " + r);
		convertToBlob(r,d);
	}

	function DeleteFile(d, e) {
		deleteFile = e;
		fiHub.server.deleteFile(d);
	}

	function OnDeleteFileAdpter(r) {
		console.info("OnDeleteFile " + r);
		deleteFile(r);
	}

	function ConvertToBase64Ex(d, a, e) {
		convertToBase64Ex = e;
		fiHub.server.convertToBase64Ex(d, a);
	}
	
	function OnConvertToBase64ExAdpter(r, f, a, d) {
		console.info("OnConvertToBase64Ex " + r);
		convertToBase64Ex(r, f, a, d);
	}

	function DeleteFileEx(d, e) {
		deleteFileEx = e;
		fiHub.server.deleteFileEx(d);
	}

	function OnDeleteFileExAdpter(r, f) {
		console.info("OnDeleteFileEx " + r);
		deleteFileEx(r, f);
	}

	function ClearPage() {
		console.info("ClearPage start");
		return fiHub.server.clearPage();
	}

	function FeederLoaded() {
		console.info("FeederLoaded start");
		return fiHub.server.feederLoaded();
	}

	function ScannerAvailable() {
		console.info("ScannerAvailable start");
		return fiHub.server.scannerAvailable();
	}

	function SetTopMostWindow(b) {
		console.info("SetTopMostWindow start");
		fiHub.server.setTopMostWindow(b);
	}

	function GetSerialNumber() {
		console.info("GetSerialNumber start ");
		return fiHub.server.getSerialNumber();
	}

	window['fujitsu']['fiscanner']['$'] = $;
	window['fujitsu']['fiscanner']['Initialize'] = Initialize;
	window['fujitsu']['fiscanner']['RegisterEvent'] = RegisterEvent;
	window['fujitsu']['fiscanner']['ConvertToBlob'] = ConvertToBlob;
	window['fujitsu']['fiscanner']['ConvertToBase64'] = ConvertToBase64;
	window['fujitsu']['fiscanner']['ConvertToBase64Ex'] = ConvertToBase64Ex;
	window['fujitsu']['fiscanner']['DeleteFile'] = DeleteFile;
	window['fujitsu']['fiscanner']['DeleteFileEx'] = DeleteFileEx;
	window['fujitsu']['fiscanner']['SetTwainDSInfo'] = SetTwainDSInfo;
	window['fujitsu']['fiscanner']['SetSourceCurrentScan'] = SetSourceCurrentScan;
	window['fujitsu']['fiscanner']['OpenScanner'] = OpenScanner;
	window['fujitsu']['fiscanner']['OpenScanner2'] = OpenScanner2;
	window['fujitsu']['fiscanner']['SelectSource'] = SelectSource;
	window['fujitsu']['fiscanner']['StartScan'] = StartScan;
	window['fujitsu']['fiscanner']['CloseScanner'] = CloseScanner;
	window['fujitsu']['fiscanner']['GetSourceCount'] = GetSourceCount;
	window['fujitsu']['fiscanner']['GetSourceName'] = GetSourceName;
	window['fujitsu']['fiscanner']['GetSourceSelect'] = GetSourceSelect;
	window['fujitsu']['fiscanner']['SetupDataSourceProperties'] = SetupDataSourceProperties;
	window['fujitsu']['fiscanner']['SelectSourceName'] = SelectSourceName;
	window['fujitsu']['fiscanner']['GetTWAINTemplateCount'] = GetTWAINTemplateCount;
	window['fujitsu']['fiscanner']['GetTWAINTemplateName'] = GetTWAINTemplateName;
	window['fujitsu']['fiscanner']['GetTWAINTemplateSelect'] = GetTWAINTemplateSelect;
	window['fujitsu']['fiscanner']['SetTWAINTemplateSelect'] = SetTWAINTemplateSelect;
	window['fujitsu']['fiscanner']['ClearPage'] = ClearPage;
	window['fujitsu']['fiscanner']['FeederLoaded'] = FeederLoaded;
	window['fujitsu']['fiscanner']['ScannerAvailable'] = ScannerAvailable;
	window['fujitsu']['fiscanner']['SetTopMostWindow'] = SetTopMostWindow;
	window['fujitsu']['fiscanner']['GetSerialNumber'] = GetSerialNumber;

})();