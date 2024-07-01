const countries = [
    {
        country: "Afghanistan",
        name: "+93",
        code: "AF",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Albania",
        name: "+355",
        code: "AL",
        flag: "https://flagcdn.com/al.svg"
    },
    {
        country: "Algeria",
        name: "+213",
        code: "DZ",
        flag: "https://flagcdn.com/dz.svg"
    },
    {
        country: "AmericanSamoa",
        name: "+1684",
        code: "AS",
        flag: "https://flagcdn.com/as.svg"
    },
    {
        country: "Andorra",
        name: "+376",
        code: "AD",
        flag: "https://flagcdn.com/ad.svg"
    },
    {
        country: "Angola",
        name: "+244",
        code: "AO",
        flag: "https://flagcdn.com/ao.svg"
    },
    {
        country: "Anguilla",
        name: "+1264",
        code: "AI",
        flag: "https://flagcdn.com/ai.svg"
    },
    {
        country: "Antarctica",
        name: "+672",
        code: "AQ",
        flag: "https://flagcdn.com/aq.svg"
    },
    {
        country: "Antigua and Barbuda",
        name: "+1268",
        code: "AG",
        flag: "https://flagcdn.com/ag.svg"
    },
    {
        country: "Argentina",
        name: "+54",
        code: "AR",
        flag: "https://flagcdn.com/ar.svg"
    },
    {
        country: "Armenia",
        name: "+374",
        code: "AM",
        flag: "https://flagcdn.com/am.svg"
    },
    {
        country: "Aruba",
        name: "+297",
        code: "AW",
        flag: "https://flagcdn.com/aw.svg"
    },
    {
        country: "Australia",
        name: "+61",
        code: "AU",
        flag: "https://flagcdn.com/au.svg"
    },
    {
        country: "Austria",
        name: "+43",
        code: "AT",
        flag: "https://flagcdn.com/at.svg"
    },
    {
        country: "Azerbaijan",
        name: "+994",
        code: "AZ",
        flag: "https://flagcdn.com/az.svg"
    },
    {
        country: "Bahamas",
        name: "+1242",
        code: "BS",
        flag: "https://flagcdn.com/bs.svg"
    },
    {
        country: "Bahrain",
        name: "+973",
        code: "BH",
        flag: "https://flagcdn.com/bh.svg"
    },
    {
        country: "Bangladesh",
        name: "+880",
        code: "BD",
        flag: "https://flagcdn.com/bd.svg"
    },
    {
        country: "Barbados",
        name: "+1246",
        code: "BB",
        flag: "https://flagcdn.com/bb.svg"
    },
    {
        country: "Belarus",
        name: "+375",
        code: "BY",
        flag: "https://flagcdn.com/by.svg"
    },
    {
        country: "Belgium",
        name: "+32",
        code: "BE",
        flag: "https://flagcdn.com/be.svg"
    },
    {
        country: "Belize",
        name: "+501",
        code: "BZ",
        flag: "https://flagcdn.com/bz.svg"
    },
    {
        country: "Benin",
        name: "+229",
        code: "BJ",
        flag: "https://flagcdn.com/bj.svg"
    },
    {
        country: "Bermuda",
        name: "+1441",
        code: "BM",
        flag: "https://flagcdn.com/bm.svg"
    },
    {
        country: "Bhutan",
        name: "+975",
        code: "BT",
        flag: "https://flagcdn.com/bt.svg"
    },
    {
        country: "Bolivia",
        name: "+591",
        code: "BO",
        flag: "https://flagcdn.com/bo.svg"
    },
    {
        country: "Bosnia and Herzegovina",
        name: "+387",
        code: "BA",
        flag: "https://flagcdn.com/ba.svg"
    },
    {
        country: "Botswana",
        name: "+267",
        code: "BW",
        flag: "https://flagcdn.com/bw.svg"
    },
    {
        country: "Brazil",
        name: "+55",
        code: "BR",
        flag: "https://flagcdn.com/br.svg"
    },
    {
        country: "Brunei Darussalam",
        name: "+673",
        code: "BN",
        flag: "https://flagcdn.com/bn.svg"
    },
    {
        country: "Bulgaria",
        name: "+359",
        code: "BG",
        flag: "https://flagcdn.com/bg.svg"
    },
    {
        country: "Burkina Faso",
        name: "+226",
        code: "BF",
        flag: "https://flagcdn.com/bf.svg"
    },
    {
        country: "Burundi",
        name: "+257",
        code: "BI",
        flag: "https://flagcdn.com/bi.svg"
    },
    {
        country: "Cambodia",
        name: "+855",
        code: "KH",
        flag: "https://flagcdn.com/kh.svg"
    },
    {
        country: "Cameroon",
        name: "+237",
        code: "CM",
        flag: "https://flagcdn.com/cm.svg"
    },
    {
        country: "Canada",
        name: "+1",
        code: "CA",
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        country: "Cape Verde",
        name: "+238",
        code: "CV",
        flag: "https://flagcdn.com/cv.svg"
    },
    {
        country: "Cayman Islands",
        name: "+ 345",
        code: "KY",
        flag: "https://flagcdn.com/ky.svg"
    },
    {
        country: "Central African Republic",
        name: "+236",
        code: "CF",
        flag: "https://flagcdn.com/cf.svg"
    },
    {
        country: "Chad",
        name: "+235",
        code: "TD",
        flag: "https://flagcdn.com/td.svg"
    },
    {
        country: "Chile",
        name: "+56",
        code: "CL",
        flag: "https://flagcdn.com/cl.svg"
    },
    {
        country: "China",
        name: "+86",
        code: "CN",
        flag: "https://flagcdn.com/cn.svg"
    },
    {
        country: "Christmas Island",
        name: "+61",
        code: "CX",
        flag: "https://flagcdn.com/cx.svg"
    },
    {
        country: "Cocos Islands",
        name: "+61",
        code: "CC",
        flag: "https://flagcdn.com/cc.svg"
    },
    {
        country: "Colombia",
        name: "+57",
        code: "CO",
        flag: "https://flagcdn.com/co.svg"
    },
    {
        country: "Comoros",
        name: "+269",
        code: "KM",
        flag: "https://flagcdn.com/km.svg"
    },
    {
        country: "Congo",
        name: "+242",
        code: "CG",
        flag: "https://flagcdn.com/cg.svg"
    },
    {
        country: "Cook Islands",
        name: "+682",
        code: "CK",
        flag: "https://flagcdn.com/ck.svg"
    },
    {
        country: "Costa Rica",
        name: "+506",
        code: "CR",
        flag: "https://flagcdn.com/cr.svg"
    },
    {
        country: "Cote d'Ivoire",
        name: "+225",
        code: "CI",
        flag: "https://flagcdn.com/ci.svg"
    },
    {
        country: "Croatia",
        name: "+385",
        code: "HR",
        flag: "https://flagcdn.com/hr.svg"
    },
    {
        country: "Cuba",
        name: "+53",
        code: "CU",
        flag: "https://flagcdn.com/cu.svg"
    },
    {
        country: "Cyprus",
        name: "+357",
        code: "CY",
        flag: "https://flagcdn.com/cy.svg"
    },
    {
        country: "Czech Republic",
        name: "+420",
        code: "CZ",
        flag: "https://flagcdn.com/cz.svg"
    },
    {
        country: "Denmark",
        name: "+45",
        code: "DK",
        flag: "https://flagcdn.com/dk.svg"
    },
    {
        country: "Djibouti",
        name: "+253",
        code: "DJ",
        flag: "https://flagcdn.com/dj.svg"
    },
    {
        country: "Dominica",
        name: "+1767",
        code: "DM",
        flag: "https://flagcdn.com/dm.svg"
    },
    {
        country: "Dominican Republic",
        name: "+1849",
        code: "DO",
        flag: "https://flagcdn.com/do.svg"
    },
    {
        country: "Ecuador",
        name: "+593",
        code: "EC",
        flag: "https://flagcdn.com/ec.svg"
    },
    {
        country: "Egypt",
        name: "+20",
        code: "EG",
        flag: "https://flagcdn.com/eg.svg"
    },
    {
        country: "El Salvador",
        name: "+503",
        code: "SV",
        flag: "https://flagcdn.com/sv.svg"
    },
    {
        country: "Equatorial Guinea",
        name: "+240",
        code: "GQ",
        flag: "https://flagcdn.com/gq.svg"
    },
    {
        country: "Eritrea",
        name: "+291",
        code: "ER",
        flag: "https://flagcdn.com/er.svg"
    },
    {
        country: "Estonia",
        name: "+372",
        code: "EE",
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        country: "Ethiopia",
        name: "+251",
        code: "ET",
        flag: "https://flagcdn.com/et.svg"
    },
    {
        country: "Falkland Islands",
        name: "+500",
        code: "FK",
        flag: "https://flagcdn.com/fk.svg"
    },
    {
        country: "Faroe Islands",
        name: "+298",
        code: "FO",
        flag: "https://flagcdn.com/fo.svg"
    },
    {
        country: "Fiji",
        name: "+679",
        code: "FJ",
        flag: "https://flagcdn.com/fj.svg"
    },
    {
        country: "Finland",
        name: "+358",
        code: "FI",
        flag: "https://flagcdn.com/fi.svg"
    },
    {
        country: "France",
        name: "+33",
        code: "FR",
        flag: "https://flagcdn.com/fr.svg"
    },
    {
        country: "French Guiana",
        name: "+594",
        code: "GF",
        flag: "https://flagcdn.com/gf.svg"
    },
    {
        country: "French Polynesia",
        name: "+689",
        code: "PF",
        flag: "https://flagcdn.com/pf.svg"
    },
    {
        country: "Gabon",
        name: "+241",
        code: "GA",
        flag: "https://flagcdn.com/ga.svg"
    },
    {
        country: "Gambia",
        name: "+220",
        code: "GM",
        flag: "https://flagcdn.com/gm.svg"
    },
    {
        country: "Georgia",
        name: "+995",
        code: "GE",
        flag: "https://flagcdn.com/ge.svg"
    },
    {
        country: "Germany",
        name: "+49",
        code: "DE",
        flag: "https://flagcdn.com/de.svg"
    },
    {
        country: "Ghana",
        name: "+233",
        code: "GH",
        flag: "https://flagcdn.com/gh.svg"
    },
    {
        country: "Gibraltar",
        name: "+350",
        code: "GI",
        flag: "https://flagcdn.com/gi.svg"
    },
    {
        country: "Greece",
        name: "+30",
        code: "GR",
        flag: "https://flagcdn.com/gr.svg"
    },
    {
        country: "Greenland",
        name: "+299",
        code: "GL",
        flag: "https://flagcdn.com/gl.svg"
    },
    {
        country: "Grenada",
        name: "+1473",
        code: "GD",
        flag: "https://flagcdn.com/gd.svg"
    },
    {
        country: "Guadeloupe",
        name: "+590",
        code: "GP",
        flag: "https://flagcdn.com/gp.svg"
    },
    {
        country: "Guam",
        name: "+1671",
        code: "GU",
        flag: "https://flagcdn.com/gu.svg"
    },
    {
        country: "Guatemala",
        name: "+502",
        code: "GT",
        flag: "https://flagcdn.com/gt.svg"
    },
    {
        country: "Guernsey",
        name: "+44",
        code: "GG",
        flag: "https://flagcdn.com/gg.svg"
    },
    {
        country: "Guinea",
        name: "+224",
        code: "GN",
        flag: "https://flagcdn.com/gn.svg"
    },
    {
        country: "Guinea-Bissau",
        name: "+245",
        code: "GW",
        flag: "https://flagcdn.com/gw.svg"
    },
    {
        country: "Guyana",
        name: "+595",
        code: "GY",
        flag: "https://flagcdn.com/gy.svg"
    },
    {
        country: "Haiti",
        name: "+509",
        code: "HT",
        flag: "https://flagcdn.com/ht.svg"
    },
    {
        country: "Honduras",
        name: "+504",
        code: "HN",
        flag: "https://flagcdn.com/hn.svg"
    },
    {
        country: "Hong Kong",
        name: "+852",
        code: "HK",
        flag: "https://flagcdn.com/hk.svg"
    },
    {
        country: "Hungary",
        name: "+36",
        code: "HU",
        flag: "https://flagcdn.com/hu.svg"
    },
    {
        country: "Iceland",
        name: "+354",
        code: "IS",
        flag: "https://flagcdn.com/is.svg"
    },
    {
        country: "India",
        name: "+91",
        code: "IN",
        flag: "https://flagcdn.com/in.svg"
    },
    {
        country: "Indonesia",
        name: "+62",
        code: "ID",
        flag: "https://flagcdn.com/id.svg"
    },
    {
        country: "Iran",
        name: "+98",
        code: "IR",
        flag: "https://flagcdn.com/ir.svg"
    },
    {
        country: "Iraq",
        name: "+964",
        code: "IQ",
        flag: "https://flagcdn.com/iq.svg"
    },
    {
        country: "Ireland",
        name: "+353",
        code: "IE",
        flag: "https://flagcdn.com/ie.svg"
    },
    {
        country: "Isle of Man",
        name: "+44",
        code: "IM",
        flag: "https://flagcdn.com/im.svg"
    },
    {
        country: "Israel",
        name: "+972",
        code: "IL",
        flag: "https://flagcdn.com/il.svg"
    },
    {
        country: "Italy",
        name: "+39",
        code: "IT",
        flag: "https://flagcdn.com/it.svg"
    },
    {
        country: "Jamaica",
        name: "+1876",
        code: "JM",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Japan",
        name: "+81",
        code: "JP",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Jersey",
        name: "+44",
        code: "JE",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Jordan",
        name: "+962",
        code: "JO",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Kazakhstan",
        name: "+77",
        code: "KZ",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Kenya",
        name: "+254",
        code: "KE",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Kiribati",
        name: "+686",
        code: "KI",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "North Korea",
        name: "+850",
        code: "KP",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "South Korea",
        name: "+82",
        code: "KR",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Kuwait",
        name: "+965",
        code: "KW",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Kyrgyzstan",
        name: "+996",
        code: "KG",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Laos",
        name: "+856",
        code: "LA",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Latvia",
        name: "+371",
        code: "LV",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Lebanon",
        name: "+961",
        code: "LB",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Lesotho",
        name: "+266",
        code: "LS",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Liberia",
        name: "+231",
        code: "LR",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Libya",
        name: "+218",
        code: "LY",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Liechtenstein",
        name: "+423",
        code: "LI",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Lithuania",
        name: "+370",
        code: "LT",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Luxembourg",
        name: "+352",
        code: "LU",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Macao",
        name: "+853",
        code: "MO",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Macedonia",
        name: "+389",
        code: "MK",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Madagascar",
        name: "+261",
        code: "MG",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Malawi",
        name: "+265",
        code: "MW",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Malaysia",
        name: "+60",
        code: "MY",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Maldives",
        name: "+960",
        code: "MV",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Mali",
        name: "+223",
        code: "ML",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Malta",
        name: "+356",
        code: "MT",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Marshall Islands",
        name: "+692",
        code: "MH",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Martinique",
        name: "+596",
        code: "MQ",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Mauritania",
        name: "+222",
        code: "MR",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Mauritius",
        name: "+230",
        code: "MU",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Mayotte",
        name: "+262",
        code: "YT",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Mexico",
        name: "+52",
        code: "MX",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Micronesia",
        name: "+691",
        code: "FM",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Moldova",
        name: "+373",
        code: "MD",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Monaco",
        name: "+377",
        code: "MC",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Mongolia",
        name: "+976",
        code: "MN",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Montenegro",
        name: "+382",
        code: "ME",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Montserrat",
        name: "+1664",
        code: "MS",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Morocco",
        name: "+212",
        code: "MA",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Mozambique",
        name: "+258",
        code: "MZ",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Myanmar",
        name: "+95",
        code: "MM",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Namibia",
        name: "+264",
        code: "NA",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Nauru",
        name: "+674",
        code: "NR",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Nepal",
        name: "+977",
        code: "NP",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Netherlands",
        name: "+31",
        code: "NL",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "New Caledonia",
        name: "+687",
        code: "NC",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "New Zealand",
        name: "+64",
        code: "NZ",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Nicaragua",
        name: "+505",
        code: "NI",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Niger",
        name: "+227",
        code: "NE",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Nigeria",
        name: "+234",
        code: "NG",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Niue",
        name: "+683",
        code: "NU",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Norfolk Island",
        name: "+672",
        code: "NF",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Northern Mariana Islands",
        name: "+1670",
        code: "MP",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Norway",
        name: "+47",
        code: "NO",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Oman",
        name: "+968",
        code: "OM",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Pakistan",
        name: "+92",
        code: "PK",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Palau",
        name: "+680",
        code: "PW",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Palestine",
        name: "+970",
        code: "PS",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Panama",
        name: "+507",
        code: "PA",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Papua New Guinea",
        name: "+675",
        code: "PG",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Paraguay",
        name: "+595",
        code: "PY",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Peru",
        name: "+51",
        code: "PE",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Philippines",
        name: "+63",
        code: "PH",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Pitcairn",
        name: "+872",
        code: "PN",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Poland",
        name: "+48",
        code: "PL",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Portugal",
        name: "+351",
        code: "PT",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Puerto Rico",
        name: "+1939",
        code: "PR",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Qatar",
        name: "+974",
        code: "QA",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Romania",
        name: "+40",
        code: "RO",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Russia",
        name: "+7",
        code: "RU",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Rwanda",
        name: "+250",
        code: "RW",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Reunion",
        name: "+262",
        code: "RE",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Saint Kitts and Nevis",
        name: "+1869",
        code: "KN",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Saint Lucia",
        name: "+1758",
        code: "LC",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Saint Martin",
        name: "+590",
        code: "MF",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Samoa",
        name: "+685",
        code: "WS",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "San Marino",
        name: "+378",
        code: "SM",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Sao Tome and Principe",
        name: "+239",
        code: "ST",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Saudi Arabia",
        name: "+966",
        code: "SA",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Senegal",
        name: "+221",
        code: "SN",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Serbia",
        name: "+381",
        code: "RS",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Seychelles",
        name: "+248",
        code: "SC",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Sierra Leone",
        name: "+232",
        code: "SL",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Singapore",
        name: "+65",
        code: "SG",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Slovakia",
        name: "+421",
        code: "SK",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Slovenia",
        name: "+386",
        code: "SI",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Solomon Islands",
        name: "+677",
        code: "SB",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Somalia",
        name: "+252",
        code: "SO",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "South Africa",
        name: "+27",
        code: "ZA",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "South Sudan",
        name: "+211",
        code: "SS",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "South Georgia",
        name: "+500",
        code: "GS",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Spain",
        name: "+34",
        code: "ES",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Sri Lanka",
        name: "+94",
        code: "LK",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Sudan",
        name: "+249",
        code: "SD",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Suriname",
        name: "+597",
        code: "SR",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Swaziland",
        name: "+268",
        code: "SZ",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Sweden",
        name: "+46",
        code: "SE",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Switzerland",
        name: "+41",
        code: "CH",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Syria",
        name: "+963",
        code: "SY",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Taiwan",
        name: "+886",
        code: "TW",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Tajikistan",
        name: "+992",
        code: "TJ",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Tanzania",
        name: "+255",
        code: "TZ",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Thailand",
        name: "+66",
        code: "TH",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Timor-Leste",
        name: "+670",
        code: "TL",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Togo",
        name: "+228",
        code: "TG",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Tokelau",
        name: "+690",
        code: "TK",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Tonga",
        name: "+676",
        code: "TO",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Trinidad and Tobago",
        name: "+1868",
        code: "TT",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Tunisia",
        name: "+216",
        code: "TN",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Turkey",
        name: "+90",
        code: "TR",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Turkmenistan",
        name: "+993",
        code: "TM",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Turks and Caicos Islands",
        name: "+1649",
        code: "TC",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Tuvalu",
        name: "+688",
        code: "TV",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Uganda",
        name: "+256",
        code: "UG",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Ukraine",
        name: "+380",
        code: "UA",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "United Arab Emirates",
        name: "+971",
        code: "AE",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "United Kingdom",
        name: "+44",
        code: "GB",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "United States",
        name: "+1",
        code: "US",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Uruguay",
        name: "+598",
        code: "UY",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Uzbekistan",
        name: "+998",
        code: "UZ",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Vanuatu",
        name: "+678",
        code: "VU",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Venezuela",
        name: "+58",
        code: "VE",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Vietnam",
        name: "+84",
        code: "VN",
        flag: "https://flagcdn.com/af.svg"
    },
    {
        country: "Virgin Islands, British",
        name: "+1284",
        code: "VG",
        flag: "https://flagcdn.com/vg.svg"
    },
    {
        country: "Virgin Islands, U.S.",
        name: "+1340",
        code: "VI",
        flag: "https://flagcdn.com/vi.svg"
    },
    {
        country: "Wallis and Futuna",
        name: "+681",
        code: "WF",
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        country: "Yemen",
        name: "+967",
        code: "YE",
        flag: "https://flagcdn.com/ye.svg"
    },
    {
        country: "Zambia",
        name: "+260",
        code: "ZM",
        flag: "https://flagcdn.com/zm.svg"
    },
    {
        country: "Zimbabwe",
        name: "+263",
        code: "ZW",
        flag: "https://flagcdn.com/zw.svg"
    }
]

export default countries