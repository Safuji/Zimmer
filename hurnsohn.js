window.onload = function(){


    const APP_TOKEN = 'euRkqcvxPjg:APA91bFK0zA8PWFVQZFPQXatA0cLUSn68jG2RxcE4JePBLcjEnwesvC4hBPOeNlupekE2ZhEwBvUnJY_aDjhwzZmx2RINrNVJxoLMA_S2MdQa_xd0RSTV-PYvG-0EtPd4EMz54Jer1wN';

    let users = [
          {
            "UId": "322",
            "userName": "AlexS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/322_ztVWqQTsxsQAwzrB.jpg",
            "level": 17,
            "hasApp": 1
          },
          {
            "UId": "3",
            "userName": "Nat",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/3_PSySBYsabJfgXMMx.jpg",
            "level": 24,
            "hasApp": 1
          },
          {
            "UId": "393",
            "userName": "FranziskaCatherineA",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/393_AjevowtzYyouDqsG.jpg",
            "level": 12,
            "hasApp": 1
          },
          {
            "UId": "720",
            "userName": "FrederikA",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/720_kkuhpLtDWWLJVYAa.jpg",
            "level": 11,
            "hasApp": 1
          },
          {
            "UId": "653",
            "userName": "HenriW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/653_UDPrnfdwdWqjNTZm.jpg",
            "level": 9,
            "hasApp": 1
          },
          {
            "UId": "544",
            "userName": "JanU",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/544_RDZyLwTdkvTOnpqV.jpg",
            "level": 17,
            "hasApp": 1
          },
          {
            "UId": "214",
            "userName": "JanLukasL",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/214_ISjULPoyVtmAyIBm.jpg",
            "level": 23,
            "hasApp": 1
          },
          {
            "UId": "496",
            "userName": "JoséG",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/496_YsVCKGBwpADHtZlr.jpg",
            "level": 12,
            "hasApp": 1
          },
          {
            "UId": "404",
            "userName": "LukasKr",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/404_oCriVlcpaMYENTjW.jpg",
            "level": 12,
            "hasApp": 1
          },
          {
            "UId": "283",
            "userName": "MarcoH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/283_hOkDYukgtRwPXjDz.jpg",
            "level": 17,
            "hasApp": 1
          },
          {
            "UId": "396",
            "userName": "MoritzS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/396_aTvCnahlfLfEglon.jpg",
            "level": 15,
            "hasApp": 1
          },
          {
            "UId": "627",
            "userName": "PaulaF",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/627_mUUKmwlKwcBRKsuT.jpg",
            "level": 12,
            "hasApp": 1
          },
          {
            "UId": "220",
            "userName": "RedouanE",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/220_ibfITMCLzdgdqYhz.jpg",
            "level": 14,
            "hasApp": 1
          },
          {
            "UId": "215",
            "userName": "SafouaneK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/215_SGFKjZVqjfptJTkZ.jpg",
            "level": 20,
            "hasApp": 1
          },
          {
            "UId": "489",
            "userName": "SaraK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/489_WlxCsefAbTJRIEXa.jpg",
            "level": 15,
            "hasApp": 1
          },
          {
            "UId": "408",
            "userName": "StellaK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/408_ejvtiZrbNZTrwwRE.jpg",
            "level": 14,
            "hasApp": 1
          },
          {
            "UId": "547",
            "userName": "TimU",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/547_YFVRahJkQLaXNAAf.jpg",
            "level": 13,
            "hasApp": 1
          },
          {
            "UId": "258",
            "userName": "TobiV",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/258_VHsVbRLNXTRBlOnE.jpg",
            "level": 19,
            "hasApp": 1
          },
          {
            "UId": "243",
            "userName": "TobiasSc",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/243_VYABMMpuBEnDMnjy.jpg",
            "level": 21,
            "hasApp": 1
          },
          {
            "UId": "361",
            "userName": "UrielW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/361_BSZSoUMiyoelpAOZ.jpg",
            "level": 11,
            "hasApp": 1
          },
          {
            "UId": "1050",
            "userName": "AbishaC",
            "picture": "https://codeclub.de/internal/images/Avatars/Age-Child-Male-Light-icon.png",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "1014",
            "userName": "AfifeK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1014_vLiMwCRBKrDceKKa.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "994",
            "userName": "AgonI",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/994_DQWNRrGChVdNGTxM.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "853",
            "userName": "AliBi",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/853_zrJXFRkbDTXNndVB.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "857",
            "userName": "AlinaT",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/857_vtUFTBapoYCKriYd.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "953",
            "userName": "AlisaH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/953_XJuGXIUzCLgqoFKr.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "654",
            "userName": "AlvaroBenedictJ",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/654_zJwSBbEkCZauDqJN.jpg",
            "level": 7,
            "hasApp": 0
          },
          {
            "UId": "999",
            "userName": "AlyssaG",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/999_oJgUvmwwYCdfZTSQ.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "1026",
            "userName": "AmalS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1026_AEcmOmWDgRFlpaWk.jpg",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "388",
            "userName": "AminaJ",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/388_psPjNRqEHGGcHWRX.jpg",
            "level": 11,
            "hasApp": 0
          },
          {
            "UId": "1002",
            "userName": "AnastasijaB",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1002_jIeYXKMOiDDaRVma.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "390",
            "userName": "AngelinaS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/390_vnYOgJTauMKHGDXr.jpg",
            "level": 10,
            "hasApp": 1
          },
          {
            "UId": "960",
            "userName": "AnnaA",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/960_GCiUpFQoGrUbVMXt.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "585",
            "userName": "AnnaW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/585_zTWlaaqxIpRtrrUV.jpg",
            "level": 11,
            "hasApp": 1
          },
          {
            "UId": "646",
            "userName": "AnnikaK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/646_JzMwJseNGTTJDMaB.jpg",
            "level": 8,
            "hasApp": 1
          },
          {
            "UId": "608",
            "userName": "AntonP",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/608_QIUXrrOgAdZkSggL.jpg",
            "level": 9,
            "hasApp": 1
          },
          {
            "UId": "850",
            "userName": "ArturU",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/850_ytbDfjhXqtWnTeuP.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "997",
            "userName": "AswiniS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/997_hfpWZkbNfjpiAYET.jpg",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "735",
            "userName": "BenO",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/735_egsvZZWFtDwSnbMu.jpg",
            "level": 8,
            "hasApp": 1
          },
          {
            "UId": "1029",
            "userName": "BenedictD",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1029_oJoOKgmXCRuZmFso.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "996",
            "userName": "BenjaminGyorgyP",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/996_oFVMTgMTZoRxXYMC.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "951",
            "userName": "CaraK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/951_AEkDvxHgUiOpDbBZ.jpg",
            "level": 5,
            "hasApp": 1
          },
          {
            "UId": "650",
            "userName": "ChristianH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/650_SDpwhSKUaNFnNcLp.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "976",
            "userName": "ClaraJosephineP",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/976_GGckWQJzoPtelOpU.jpg",
            "level": 3,
            "hasApp": 1
          },
          {
            "UId": "978",
            "userName": "ClemensW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/978_UPowQFbmyjETwVbx.jpg",
            "level": 3,
            "hasApp": 1
          },
          {
            "UId": "539",
            "userName": "DiegoN",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/539_FAknqnjBVhHciTIM.jpg",
            "level": 11,
            "hasApp": 1
          },
          {
            "UId": "947",
            "userName": "DimitriosV",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/947_TeJfBglFLnFFcTXs.jpg",
            "level": 5,
            "hasApp": 1
          },
          {
            "UId": "652",
            "userName": "EkremO",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/652_hJSwfaaCMFZeXYep.jpg",
            "level": 8,
            "hasApp": 1
          },
          {
            "UId": "738",
            "userName": "ElenaS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/738_ZfcIzRDunhOPphaL.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "848",
            "userName": "EmilyU",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/848_obPXBHBeDzUfuZkN.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "1012",
            "userName": "EmmaW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1012_bjyiuHDjiGdLBanE.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "730",
            "userName": "ErikS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/730_czvEHQtVAcMZGMrv.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "639",
            "userName": "EvaS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/639_AwxpUEkMNnlboeDM.jpg",
            "level": 13,
            "hasApp": 1
          },
          {
            "UId": "849",
            "userName": "FabianB",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/849_UbLRUrcHlIIVyGtV.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "323",
            "userName": "FabianK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/323_mrEvuHmKagjbwWjQ.jpg",
            "level": 15,
            "hasApp": 1
          },
          {
            "UId": "637",
            "userName": "FabianV",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/637_zlKjePOlCBMwbmyk.jpg",
            "level": 9,
            "hasApp": 1
          },
          {
            "UId": "1001",
            "userName": "GabrielK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1001_LEBePCagTzRunwAq.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "1018",
            "userName": "GeworgH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1018_XWSTIqzhqzIhFtTb.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1033",
            "userName": "HannesS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1033_HQjzxMrpWJAaamyY.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "1034",
            "userName": "IliasE",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1034_ftfSqsYHoMHFQnzX.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1044",
            "userName": "JakobM",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1044_PBDDdAFmVifylvhW.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "740",
            "userName": "JanJ",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/740_FqriLhLwlqSFYPiV.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "726",
            "userName": "JanLi",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/726_FJTYqICgMaBptuoS.jpg",
            "level": 10,
            "hasApp": 1
          },
          {
            "UId": "641",
            "userName": "JanM",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/641_ZbVfuDSgUlyuqOad.jpg",
            "level": 9,
            "hasApp": 1
          },
          {
            "UId": "1021",
            "userName": "JanaS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1021_RSxItOJJWYKAhAbs.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "622",
            "userName": "JanoA",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/622_JkzjXCvcdZbIoPUz.jpg",
            "level": 12,
            "hasApp": 1
          },
          {
            "UId": "956",
            "userName": "JaroS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/956_OlpAthLRmkmiSlNl.jpg",
            "level": 4,
            "hasApp": 0
          },
          {
            "UId": "855",
            "userName": "JetteU",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/855_KcuodezjbIhrFlCo.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "1039",
            "userName": "JohannaW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1039_EIWTpRLWCsEqaYQH.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "950",
            "userName": "JuliaC",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/950_ngoiQrAilKalSNPW.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "568",
            "userName": "JuliaH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/568_hYiCskzmXvhbpdZf.jpg",
            "level": 12,
            "hasApp": 1
          },
          {
            "UId": "965",
            "userName": "JunhaoC",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/965_sIWzdohJejMfShRc.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "727",
            "userName": "KaanGo",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/727_KRSPHKHWWKtEnqSz.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "391",
            "userName": "KevinV",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/391_EQdLvhNhOxFoICvo.jpg",
            "level": 13,
            "hasApp": 1
          },
          {
            "UId": "854",
            "userName": "KimiyaP",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/854_CxxrCWxcBdpuwfXc.jpg",
            "level": 6,
            "hasApp": 0
          },
          {
            "UId": "1004",
            "userName": "KyoLottaH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1004_icpOWwVPmLBGDCih.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "993",
            "userName": "LarsT",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/993_ELxKkremBJUzLBKG.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "494",
            "userName": "LarsW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/494_ibtVooHTZSrDKRsF.jpg",
            "level": 10,
            "hasApp": 1
          },
          {
            "UId": "1030",
            "userName": "LeanderM",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1030_lfFnpsBuRfaQSeII.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1031",
            "userName": "LenaS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1031_gNtiRkVbvuMjlcaH.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "1020",
            "userName": "LeniK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1020_WRhYlUCrGwtKptqc.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "770",
            "userName": "LennP",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/770_QhkHFERCIqUgQown.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "1046",
            "userName": "LeonH",
            "picture": "https://codeclub.de/internal/images/Avatars/Age-Child-Male-Light-icon.png",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "1016",
            "userName": "LeonOm",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1016_BRWLeaLVGlUwUAvA.jpg",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "961",
            "userName": "LeonardM",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/961_AhTcIPQUJkKwooWJ.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "989",
            "userName": "LeonieK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/989_UPsgpCxESEEzafpP.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "635",
            "userName": "LinusH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/635_VjqBsXgqNrqkFCdj.jpg",
            "level": 9,
            "hasApp": 1
          },
          {
            "UId": "991",
            "userName": "LiyaS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/991_VoEVrfFEdhFFLVyp.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "649",
            "userName": "LorenzU",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/649_FwhFmmYwtrHzPhnD.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "851",
            "userName": "LucaG",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/851_FIeLDHRMACAMTeWQ.jpg",
            "level": 5,
            "hasApp": 1
          },
          {
            "UId": "630",
            "userName": "LucaL",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/630_wubdIbcbvwAcKSmJ.jpg",
            "level": 9,
            "hasApp": 1
          },
          {
            "UId": "1024",
            "userName": "LucieN",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1024_ASBIIpBqZgOTdBdO.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1003",
            "userName": "LukasG",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1003_AySrAjClJYkWvyjj.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "1045",
            "userName": "LukasH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1045_DCHlibRCOsVJnTtZ.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "998",
            "userName": "MadinaS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/998_iUxdwYoLKWooBprj.jpg",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "1005",
            "userName": "MajaW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1005_dsRmldfLttpUehDg.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "739",
            "userName": "MariaV",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/739_UOVYAMKXUChUcmKD.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "1028",
            "userName": "MarieK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1028_NznLQoTHxvCzlsFh.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "1019",
            "userName": "MariusR",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1019_LUnuSXPGTMFEZzxa.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1017",
            "userName": "MarleneT",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1017_yysxWuTjrURicSRd.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "647",
            "userName": "MarthaV",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/647_rNyRJSXBIrqBUtfX.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "1000",
            "userName": "MaryamH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1000_QjtZdZYJMxjBqMqx.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "959",
            "userName": "MatteoD",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/959_nEhqFrKPLhQKjkVD.jpg",
            "level": 4,
            "hasApp": 0
          },
          {
            "UId": "1032",
            "userName": "MaxW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1032_zQIlkLtfVEzLqfQC.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1040",
            "userName": "MeliaF",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1040_aqXAiifVlvGVOlOj.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "713",
            "userName": "MiaF",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/713_XOtgfqpayDZzzhhu.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "743",
            "userName": "MiguelM",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/743_TMowsmFizIQqXlKZ.jpg",
            "level": 6,
            "hasApp": 1
          },
          {
            "UId": "1027",
            "userName": "MikaK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1027_FMtCkcSYChycblOm.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "948",
            "userName": "MikoB",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/948_TedfOpLTDfQrDdhU.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "1008",
            "userName": "MilaB",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1008_SlMrDAfoUUuesHxI.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1011",
            "userName": "MüslümK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1011_StmHawiNyUSyzOoT.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "1007",
            "userName": "MustafaA",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1007_VkGzdGKfvkJTGhte.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "954",
            "userName": "NajlaaA",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/954_xbXmvcGCvRJpqnaM.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "725",
            "userName": "NawfalZ",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/725_LCmvMAwdRzeSBOSy.jpg",
            "level": 5,
            "hasApp": 1
          },
          {
            "UId": "958",
            "userName": "NéaS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/958_UcBcEGfjGbXroVUo.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "1015",
            "userName": "NeleW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1015_rMXVlYOiUYlUlliz.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "924",
            "userName": "NicoS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/924_foNytMNsByYcpwxy.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "971",
            "userName": "NikK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/971_zKydlrpmJXppYkwr.jpg",
            "level": 3,
            "hasApp": 1
          },
          {
            "UId": "1013",
            "userName": "NikolaosV",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1013_AJLnYOeEWLUJGBPE.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1006",
            "userName": "NiloC",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1006_MPOVEKFlYqlkAPsf.jpg",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "1038",
            "userName": "NunoP",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1038_hyakaMdqoWhvqdHi.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "644",
            "userName": "OcéaneG",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/644_lxXvohKbwHlGzuio.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "769",
            "userName": "PaulK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/769_nbyXVGjTsGvZKQEr.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "1009",
            "userName": "PaulS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1009_lPBrvalApeNXYaiY.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "1048",
            "userName": "PhilZ",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1048_jSAZMuMGMKgjWMpe.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "624",
            "userName": "PhilippH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/624_NHVnUzFYUogoyDNs.jpg",
            "level": 11,
            "hasApp": 1
          },
          {
            "UId": "1023",
            "userName": "RaghadY",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1023_uTwGSRDTwBsKSlnh.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "1051",
            "userName": "SM",
            "picture": "https://codeclub.de/internal/images/Avatars/Age-Child-Male-Light-icon.png",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "990",
            "userName": "SametS",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/990_kSKaJQWkVIgcKcWW.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "409",
            "userName": "SamiK",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/409_SLyPGYZSOkXGJHdo.jpg",
            "level": 14,
            "hasApp": 1
          },
          {
            "UId": "995",
            "userName": "SamuelG",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/995_aAclcurGbrXdSowF.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "1047",
            "userName": "SamuelKr",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1047_ULBYpVeqYUZNgRQw.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1036",
            "userName": "SaskiaF",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1036_wAdaPjDhFRubWgzg.jpg",
            "level": 1,
            "hasApp": 0
          },
          {
            "UId": "1041",
            "userName": "SemihD",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1041_nMTdOmayMtGHhcJY.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "736",
            "userName": "SherminehM",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/736_VAbmrUmeAxJrHrEX.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "1022",
            "userName": "SimonV",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1022_zDmRNukVYvCAuFkx.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1042",
            "userName": "SimonZ",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1042_SBrpVPmdffHRnWyU.jpg",
            "level": 0,
            "hasApp": 1
          },
          {
            "UId": "1035",
            "userName": "SoniaM",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1035_wYrEXVtCtjtkGZOb.jpg",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "412",
            "userName": "SophieBö",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/412_VManduXstvuEMJeH.jpg",
            "level": 11,
            "hasApp": 1
          },
          {
            "UId": "955",
            "userName": "StergiosL",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/955_BpyVzrOZiRSoVuFe.jpg",
            "level": 4,
            "hasApp": 1
          },
          {
            "UId": "992",
            "userName": "ThorvidE",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/992_EzyMAQiWIUYFKwWZ.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "737",
            "userName": "TillH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/737_SdNbwlsGDJcPUxVt.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1010",
            "userName": "Tim-KonstantinH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1010_lQVJRoCywxjPJPDj.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "324",
            "userName": "TimoG",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/324_kfMhxvveCIOXYmnG.jpg",
            "level": 15,
            "hasApp": 1
          },
          {
            "UId": "643",
            "userName": "TobiasH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/643_zVopUCmBQPPdbbaW.jpg",
            "level": 11,
            "hasApp": 1
          },
          {
            "UId": "1025",
            "userName": "TomE",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1025_XCFQVinkYxyAcRGO.jpg",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "957",
            "userName": "VincentL",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/957_PLxTJUFWVEtucJSN.jpg",
            "level": 5,
            "hasApp": 1
          },
          {
            "UId": "1037",
            "userName": "VitR",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1037_mzxqmENwFXAfOAXT.jpg",
            "level": 1,
            "hasApp": 1
          },
          {
            "UId": "1043",
            "userName": "YounesB",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/1043_YZEkiVsBVMQKbpKR.jpg",
            "level": 0,
            "hasApp": 0
          },
          {
            "UId": "564",
            "userName": "Office",
            "picture": "https://codeclub.de/internal/images/Avatars/Age-Child-Male-Light-icon.png",
            "level": 2,
            "hasApp": 0
          },
          {
            "UId": "782",
            "userName": "Boz",
            "picture": "https://codeclub.de/internal/images/Avatars/Age-Child-Male-Light-icon.png",
            "level": 3,
            "hasApp": 0
          },
          {
            "UId": "777",
            "userName": "NiklasSc",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/777_qvPkTfiMEdRHkAEd.jpg",
            "level": 8,
            "hasApp": 1
          },
          {
            "UId": "674",
            "userName": "TimSchä",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/674_kPqvnyfcIbKITXat.jpg",
            "level": 7,
            "hasApp": 1
          },
          {
            "UId": "123",
            "userName": "TH",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/123_eziwdXILNaKktMPw.jpg",
            "level": 18,
            "hasApp": 1
          },
          {
            "UId": "263",
            "userName": "TorbenW",
            "picture": "https://codeclub.de/internal/upload/Avatars/profile/263_OCoiUAEHjAtbuUBK.jpg",
            "level": 15,
            "hasApp": 1
          }
        ].map(item => Object.assign({}, item, {gender: Math.random() > 0.5? "m":"w" }))
		.map(item => Object.assign({}, item, {age: Math.round(Math.random() * 7 + 11)}))

    //console.log(users);

    const rooms = [

        {
			id:0,
            age: 12,
            gender: 'w',
            members: 30,
            level: 0
        },
        {
			id:1,
            age: 12,
            gender: 'w',
            members: 50,
            level: 0
        },
		{
			id:2,
            age: 12,
            gender: 'm',
            members: 6,
            level: 0
        },
        {
			id:2,
            age: 12,
            gender: 'm',
            members: 30,
            level: 0
        },
        {
			id:3,
            age: 12,
            gender: 'm',
            members: 30,
            level: 0
        },
        {
			id:4,
            age: 12,
            gender: 'w',
            members: 30,
            level: 0
        },
        {
			id:5,
            age: 12,
            gender: 'm',
            members: 10,
            level: 0
        },
        {
			id:6,
            age: 12,
            gender: 'm',
            members: 10,
            level: 0
        },
        {
			id:7,
            age: 12,
            gender: 'm',
            members: 10,
            level: 0
        },
        {
			id:8,
            age: 12,
            gender: 'm',
            members: 10,
            level: 0
        }
    ]

    const ratio = users.length / rooms.map(item => item.members).reduce((n, item) => n + item, 0);
    console.log(ratio);

    users = {
      'm': users.filter(({gender}) => gender == 'm'),
      'w': users.filter(({gender}) => gender == 'w'),
    }

	//console.log(users);
	let highestestScore = 0;
	setInterval(() => {
		d = findBestDistribution(users, rooms, 10000)

		if(highestestScore < d.score){
			highestestScore = d.score
			console.log(d);
		}
		
	}, 1);
	
	function findBestDistribution(users, rooms, n){
		const distributions = []
		let highestScore = 0;
		for(let i = 0; i < n; i++){
			let dist = createDistribution(users, rooms)
			//console.log(dist);
			distributions.push(dist);
            if (dist.score > highestScore){
                highestScore = dist.score;
                //console.log(i, highestScore)
            }
		}
		return distributions.sort((a, b) => b.score - a.score)[0]
	}
	function createDistribution(users, rooms){
		const filledRooms = []
		const homeLessUsers = JSON.parse(JSON.stringify(users))

		for (let room of rooms){
            let filledRoom = {id: room.id, users : []}
			for (let i = 0; i < (Math.ceil(room.members * ratio)); i++){
				filledRoom.users.push(pickUser(homeLessUsers[room.gender]))
			}
			filledRoom.score = scoreRoom(filledRoom)
            filledRooms.push(filledRoom)
		}
		filledRooms.score = filledRooms.map(item => item.score).reduce((n, item) => n + item, 0)
    	return filledRooms
	}

    function scoreRoom(room) {
		let score = 0
        let oldest = 0
        let c = 0
        let ages = {}


        for (let u of room.users){
            if (u.age < oldest) oldest = u.age;
           //console.log(u.age);

            if (!ages[u.age]) ages[u.age] = 1
            else ages[u.age]++

            c += u.age
        }
        c -= oldest

        const average = c / (room.users.length - 1);
		for (let n in ages){
            //console.log(n, ages[n]);
        	score -= Math.abs((parseInt(n) - average) * ages[n])
			score += ages[n] ** 2
        }
        
        if (average < 16 && (oldest - average) > 2) score += 10;

		return Number(score.toFixed(2))
	}


    function pickUser(arr){
      const res = arr[ Math.floor(Math.random() * (arr.length - 1))]
      arr = arr.filter(({id}) => id != res.id)
      return res
    }
}


