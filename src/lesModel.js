
export default {

    install(Vue) {

        Vue.prototype.getLesModel = function (value) {
            var model
            if (value == "formMapping") {
                model = {
                    "createDate": null,
                    "formId": "init",
                    "formKey": null,
                    "modifyDate": null,
                    "status": null,
                    "targetId": null,
                    "targetTable": null,
                    formStep: null,
                    phone: null,
                    countryCode: null,
                    country: null,
                }

            } else if (value == "formClass") {
                model = {
                    enableEditStep: null,
                    formClassId: null,
                    latestStep: null,
                }

            } else if (value == "formWep1_0") {
                model = {
                    email: null,
                    formId: null,
                    formWep1_0Id: "init",
                    phone: null,
                    "status": null,
                    "createDate": new Date(),
                    "modifyDate": new Date(),
                    countryCode: "",
                    country: null,
                }

            } else if (value == "formWep1_1") {
                model = {
                    categoryCounseling: null,
                    commencementCounseling: null,
                    completionCounseling: null,
                    country: null,
                    formId: null,
                    formWep1_1Id: "init",
                    gender: null,
                    name: null,
                    projectName: null,
                    registration: null,
                    "status": null,
                    "createDate": null,
                    "modifyDate": null,
                }

            } else if (value == "formWep1_2") {
                model = {
                    beneficiary: null,
                    createDate: null,
                    dailyWorkingHours: null,
                    establishedDate: null,
                    formId: null,
                    formWep1_2Id: "init",
                    modifyDate: null,
                    monthlySale: null,
                    numberOfEmployees: null,
                    revenueInvestedInHouseholdExpenses: 0,
                    revenueReinvestedInBusinessOperation: 0,
                    status: null,
                    monthlyRevenue: 0,
                    householdExpenses: 0,
                    businessOperation: 0,
                }

            } else if (value == "employer") {
                model = {
                    "address": null,
                    "businessName": null,
                    "businessStatus": null,
                    "contactPerson": null,
                    "createDate": null,
                    "district": null,
                    "email": null,
                    "employerId": null,
                    "firstName": null,
                    "industry": null,
                    "jobTitle": null,
                    "lastName": null,
                    "modifyDate": null,
                    "phone": null,
                    "staffQa1": null,
                    "staffQa2": null,
                    "staffQa3": null,
                    "staffQa4": null,
                    "staffQb1": null,
                    "staffQb2": null,
                    "staffQb3": null,
                    "staffQb4": null,
                    "staffQc1": null,
                    "staffQc2": null,
                    "staffQc3": null,
                    "staffQc4": null,
                    "staffQd1": null,
                    "staffQd2": null,
                    "staffQd3": null,
                    "staffQd4": null,
                    "staffQe1": null,
                    "staffQe2": null,
                    "staffQe3": null,
                    "staffQe4": null,
                    "status": null
                }
            } else if (value == "employerTerminated") {
                model = {
                    dateOfEmployment: null,
                    dateOfTermination: null,
                    email: null,
                    jobTitle: null,
                    name: null,
                    paymentMethods: null,
                    phone: null,
                    salary: null,
                    terminatedId: null
                }
            } else if (value == 'employerVacancies') {
                model = {
                    hours: null,
                    jobTitle: null,
                    location: null,
                    qualifications: null,
                    startDate: null,
                    vacanciesId: null,
                    vacanciesNumber: null
                }
            }

            return JSON.parse(JSON.stringify(model));
        };

        Vue.prototype.getLesArray = function (type) {
            var commonArray
            // if (type == 'formWep1_counrty') {
            //     commonArray = [
            //         { value: 'Guatemala', name: 'Guatemala' },
            //         { value: 'Honduras', name: 'Honduras' },
            //         { value: 'Paraguay', name: 'Paraguay' },
            //         { value: 'Belize', name: 'Belize' },
            //         { value: 'Haiti', name: 'Haiti' },
            //         { value: 'Saint Lucia', name: 'Saint Lucia' },
            //         { value: 'Saint Christopher and Nevis', name: 'Saint Christopher and Nevis' },
            //         { value: 'Saint Vincent', name: 'Saint Vincent' },

            //     ]
            //     return commonArray;
            // } else if (type == 'formWep1_gender') {
            //     commonArray = [
            //         { value: 'Male', name: 'Male' },
            //         { value: 'Female', name: 'Female' },
            //         { value: 'X', name: 'X' },
            //     ]
            //     return commonArray;
            // } else if (type == 'formWep1_categoryCounseling') {
            //     commonArray = [
            //         { value: 'Vocational Skill Training', name: 'Vocational Skill Training' },
            //         { value: 'Entrepreneurship', name: 'Entrepreneurship' },
            //         { value: 'MSME Relief Counseling', name: 'MSME Relief Counseling' },
            //     ]
            //     return commonArray;
            // } else 
            if (type == 'formWep1_useLanguage') {
                commonArray = [
                    { value: 'English', text: 'English' },
                    { value: 'Spanish', text: 'Spanish' },
                    { value: 'Cht', text: '中文' },

                ]
                return commonArray;
            } else
                if (type == 'district') {
                    commonArray = [
                        { value: 'Corozal Free Zone', name: 'Corozal Free Zone' },
                        { value: 'Corozal Town', name: 'Corozal Town' },
                        { value: 'Corozal Rural', name: 'Corozal Rural' },
                        { value: 'Orange Walk Town', name: 'Orange Walk Town' },
                        { value: 'Orange Walk Rural', name: 'Orange Walk Rural' },
                        { value: 'San Pedro Town', name: 'San Pedro Town' },
                        { value: 'Caye Caulker Village', name: 'Caye Caulker Village' },
                        { value: 'Belize Rural', name: 'Belize Rural' },
                        { value: 'Belize City', name: 'Belize City' },
                        { value: 'Belmopan City', name: 'Belmopan City' },
                        { value: 'Santa Elena Town', name: 'Santa Elena Town' },
                        { value: 'San Ignacio Town', name: 'San Ignacio Town' },
                        { value: 'Benque Viejo Del Carmen Town', name: 'Benque Viejo Del Carmen Town' },
                        { value: 'Cayo Rural', name: 'Cayo Rural' },
                        { value: 'Dangriga Town', name: 'Dangriga Town' },
                        { value: 'Independence Village', name: 'Independence Village' },
                        { value: 'Placencia Village', name: 'Placencia Village' },
                        { value: 'Stann Creek Rural', name: 'Stann Creek Rural' },
                        { value: 'Punta Gorda Town', name: 'Punta Gorda Town' },
                        { value: 'Toledo Rural', name: 'Toledo Rural' },
                    ]
                    return commonArray;
                } else if (type == 'qualifications') {
                    commonArray = [
                        {
                            value: "Certificate"
                        },
                        {
                            value: "Diploma"
                        },
                        {
                            value: "Associate Degree"
                        },
                        {
                            value: "Bachelor's Degree"
                        },
                        {
                            value: "Master's Degree"
                        },
                        {
                            value: "Doctoral Degree"
                        }
                    ]
                    return commonArray;
                } else if (type == 'paymentMethods') {
                    commonArray = [
                        {
                            value: "Hourly"
                        },
                        {
                            value: "Daily"
                        },
                        {
                            value: "Weekly"
                        },
                        {
                            value: "Monthly"
                        },
                        {
                            value: "Annual"
                        },
                        {
                            value: "Commission"
                        },
                        {
                            value: "Share of profits"
                        },
                        {
                            value: "Task work"
                        },
                        {
                            value: "Piecework"
                        },
                        {
                            value: "Output basis"
                        }
                    ]
                    return commonArray;
                } else if (type == 'industry') {
                    commonArray = [
                        { value: "Agriculture, forestry and fishing" },
                        {
                            value: "Mining and quarrying"
                        },
                        {
                            value: "Manufacturing"
                        },
                        {
                            value: "Electricity, gas, steam and air conditioning supply"
                        },
                        {
                            value: "Water supply; sewerage, waste management and remediation activities"
                        },
                        {
                            value: "Construction"
                        },
                        {
                            value: "Wholesale and retail trade; repair of motor vehicles and motorcycles"
                        },
                        {
                            value: "Transportation and storage"
                        },
                        {
                            value: "Accommodation and food service activities"
                        },
                        {
                            value: "Information and communication"
                        },
                        {
                            value: "Financial and insurance activities"
                        },
                        {
                            value: "Real estate activities"
                        },
                        {
                            value: "Professional, scientific and technical activities"
                        },
                        {
                            value: "Administrative and support service activities"
                        },
                        {
                            value: "Public administration and defence; compulsory social security"
                        },
                        {
                            value: "Education"
                        },
                        {
                            value: "Human health and social work activities"
                        },
                        {
                            value: "Arts, entertainment and recreation"
                        },
                        {
                            value: "Other service activities"
                        },
                        {
                            value: "Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use"
                        },
                        {
                            value: "Activities of extraterritorial organizations and bodies"
                        }
                    ]
                    return commonArray;
                } else if (type == 'jobTitle') {
                    commonArray = [
                        {
                            value: "Accountants"
                        },
                        {
                            value: "Accounting and bookkeeping clerks"
                        },
                        {
                            value: "Accounting associate professionals"
                        },
                        {
                            value: "Actors"
                        },
                        {
                            value: "Administrative and executive secretaries"
                        },
                        {
                            value: "Advertising and marketing professionals"
                        },
                        {
                            value: "Advertising and public relations managers"
                        },
                        {
                            value: "Aged care services managers"
                        },
                        {
                            value: "Agricultural and forestry production managers"
                        },
                        {
                            value: "Agricultural and industrial machinery mechanics and repairers"
                        },
                        {
                            value: "Agricultural technicians"
                        },
                        {
                            value: "Air conditioning and refrigeration mechanics"
                        },
                        {
                            value: "Refrigerator repairer"
                        },
                        {
                            value: "Air traffic controllers"
                        },
                        {
                            value: "Air traffic safety electronics technicians"
                        },
                        {
                            value: "Aircraft engine mechanics and repairers"
                        },
                        {
                            value: "Aircraft pilots and related associate professionals"
                        },
                        {
                            value: "Ambulance workers"
                        },
                        {
                            value: "Animal producers not elsewhere classified"
                        },
                        {
                            value: "Announcers on radio, television and other media"
                        },
                        {
                            value: "Apiarists and sericulturists"
                        },
                        {
                            value: "Applications programmers"
                        },
                        {
                            value: "Aquaculture and fisheries production managers"
                        },
                        {
                            value: "Aquaculture workers"
                        },
                        {
                            value: "Archivists and curators"
                        },
                        {
                            value: "Armed forces occupations, other ranks"
                        },
                        {
                            value: "Assemblers not elsewhere classified"
                        },
                        {
                            value: "Assistant manufacturing manager"
                        },
                        {
                            value: "Astrologers, fortune-tellers and related workers"
                        },
                        {
                            value: "Athletes and sports players"
                        },
                        {
                            value: "Audiologists and speech therapists"
                        },
                        {
                            value: "Authors and related writers"
                        },
                        {
                            value: "Bakers, pastry-cooks and confectionery makers"
                        },
                        {
                            value: "Bank tellers and related clerks"
                        },
                        {
                            value: "Bartenders"
                        },
                        {
                            value: "Beauticians and related workers"
                        },
                        {
                            value: "Bicycle and related repairers"
                        },
                        {
                            value: "Biologists, botanists, zoologists and related professionals"
                        },
                        {
                            value: "Blacksmiths, hammer smiths and forging press workers"
                        },
                        {
                            value: "Bleaching, dyeing and fabric cleaning machine operators"
                        },
                        {
                            value: "Boat repairer (wooden)"
                        },
                        {
                            value: "Bookmakers, croupiers and related gaming workers"
                        },
                        {
                            value: "Bricklayers and related workers"
                        },
                        {
                            value: "Broadcasting and audio-visual technicians"
                        },
                        {
                            value: "Building and related electricians"
                        },
                        {
                            value: "Building architects"
                        },
                        {
                            value: "Building caretakers"
                        },
                        {
                            value: "Building construction labourers"
                        },
                        {
                            value: "Building frame and related trades workers not elsewhere classified"
                        },
                        {
                            value: "Building structure cleaners"
                        },
                        {
                            value: "Bus and tram drivers"
                        },
                        {
                            value: "Business services agents not elsewhere classified"
                        },
                        {
                            value: "Business services and administration managers not elsewhere classified"
                        },
                        {
                            value: "Butchers, fishmongers and related food preparers"
                        },
                        {
                            value: "Buyers"
                        },
                        {
                            value: "Cabinet-makers and related workers"
                        },
                        {
                            value: "Car, taxi and van drivers"
                        },
                        {
                            value: "Car dealer"
                        },
                        {
                            value: "Carpenters and joiners"
                        },
                        {
                            value: "Cartographers and surveyors"
                        },
                        {
                            value: "Cashiers and ticket clerks"
                        },
                        {
                            value: "Cement, stone and other mineral products machine operators"
                        },
                        {
                            value: "Chefs"
                        },
                        {
                            value: "Chemical and physical science technicians"
                        },
                        {
                            value: "Chemical engineering technicians"
                        },
                        {
                            value: "Chemical engineers"
                        },
                        {
                            value: "Chemical processing plant controllers"
                        },
                        {
                            value: "Chemical products plant and machine operators"
                        },
                        {
                            value: "Chemists"
                        },
                        {
                            value: "Child care services managers"
                        },
                        {
                            value: "Child care workers"
                        },
                        {
                            value: "Civil engineering labourers"
                        },
                        {
                            value: "Civil engineering technicians"
                        },
                        {
                            value: "Civil engineers"
                        },
                        {
                            value: "Cleaners and helpers in offices, hotels and other establishments"
                        },
                        {
                            value: "Cleaning & housekeeping supervisors in offices, hotels & other establishments"
                        },
                        {
                            value: "Clearing and forwarding agents"
                        },
                        {
                            value: "Clerical support workers not elsewhere classified"
                        },
                        {
                            value: "Client information workers not elsewhere classified"
                        },
                        {
                            value: "Coding, proof-reading and related clerks"
                        },
                        {
                            value: "Commercial sales representatives (Courts/Bowen & Bowen/Caribbean Tires/SanCas)"
                        },
                        {
                            value: "Commissioned armed forces officers"
                        },
                        {
                            value: "Community health workers"
                        },
                        {
                            value: "Companions and valets"
                        },
                        {
                            value: "Computer network and systems technicians"
                        },
                        {
                            value: "Computer network professionals"
                        },
                        {
                            value: "Concrete placers, concrete finishers and related workers"
                        },
                        {
                            value: "Conference and event planners"
                        },
                        {
                            value: "Construction managers"
                        },
                        {
                            value: "Construction supervisors"
                        },
                        {
                            value: "Contact centre information clerks"
                        },
                        {
                            value: "Contact centre salespersons (Ready call)"
                        },
                        {
                            value: "Cooks"
                        },
                        {
                            value: "Craft and related workers not elsewhere classified"
                        },
                        {
                            value: "Crane, hoist and related plant operators"
                        },
                        {
                            value: "Creative and performing artists not elsewhere classified"
                        },
                        {
                            value: "Credit and loans officers"
                        },
                        {
                            value: "Crop farm labourers (cane cutter)"
                        },
                        {
                            value: "Customs and border inspectors"
                        },
                        {
                            value: "Dairy-products makers"
                        },
                        {
                            value: "Dancers and choreographers"
                        },
                        {
                            value: "Data entry clerks"
                        },
                        {
                            value: "Database and network professionals not elsewhere classified"
                        },
                        {
                            value: "Database designers and administrators"
                        },
                        {
                            value: "Debt-collectors and related workers"
                        },
                        {
                            value: "Deep-sea fishery workers"
                        },
                        {
                            value: "Dental assistants and therapists"
                        },
                        {
                            value: "Dentists"
                        },
                        {
                            value: "Dieticians and nutritionists"
                        },
                        {
                            value: "Dispensing opticians"
                        },
                        {
                            value: "Dive instructor"
                        },
                        {
                            value: "Domestic cleaners and helpers"
                        },
                        {
                            value: "Domestic housekeepers"
                        },
                        {
                            value: "Door to door salespersons (Tupperware / Avon salespersons)"
                        },
                        {
                            value: "Draughtspersons"
                        },
                        {
                            value: "Drivers of animal-drawn vehicles and machinery"
                        },
                        {
                            value: "Driving instructors"
                        },
                        {
                            value: "Early childhood educators"
                        },
                        {
                            value: "Earthmoving and related plant operators"
                        },
                        {
                            value: "Economists"
                        },
                        {
                            value: "Education managers"
                        },
                        {
                            value: "Education methods specialists"
                        },
                        {
                            value: "Electrical and electronic equipment assemblers"
                        },
                        {
                            value: "Electrical engineering technicians"
                        },
                        {
                            value: "Electrical engineers"
                        },
                        {
                            value: "Electrical line installers and repairers"
                        },
                        {
                            value: "Electrical mechanics and fitters"
                        },
                        {
                            value: "Motor Vehicle mechanic"
                        },
                        {
                            value: "Domestic appliance mechanic"
                        },
                        {
                            value: "Industrial machinery repairer"
                        },
                        {
                            value: "Electronics engineering technicians"
                        },
                        {
                            value: "Electronics engineers"
                        },
                        {
                            value: "Electronics mechanics and servicers"
                        },
                        {
                            value: "Elementary workers not elsewhere classified"
                        },
                        {
                            value: "Employment agents and contractors"
                        },
                        {
                            value: "Engineering professionals not elsewhere classified"
                        },
                        {
                            value: "Enquiry clerks"
                        },
                        {
                            value: "Environmental and occupational health and hygiene professionals"
                        },
                        {
                            value: "Environmental and occupational health inspectors and associates"
                        },
                        {
                            value: "Environmental engineers"
                        },
                        {
                            value: "Environmental protection professionals"
                        },
                        {
                            value: "Farming, forestry and fisheries advisers"
                        },
                        {
                            value: "Fashion and other models"
                        },
                        {
                            value: "Fast food preparers"
                        },
                        {
                            value: "Fibre preparing, spinning and winding machine operators"
                        },
                        {
                            value: "Field crop and vegetable growers"
                        },
                        {
                            value: "Filing and copying clerks"
                        },
                        {
                            value: "Film, stage and related directors and producers"
                        },
                        {
                            value: "Finance managers"
                        },
                        {
                            value: "Financial analysts"
                        },
                        {
                            value: "Financial and insurance services branch managers"
                        },
                        {
                            value: "Financial and investment advisers"
                        },
                        {
                            value: "Fire-fighters"
                        },
                        {
                            value: "Fishery and aquaculture labourers"
                        },
                        {
                            value: "Fitness and recreation instructors and program leaders"
                        },
                        {
                            value: "Floor layers and tile setters"
                        },
                        {
                            value: "Food and beverage tasters and graders"
                        },
                        {
                            value: "Food and related products machine operators"
                        },
                        {
                            value: "Food service counter attendants"
                        },
                        {
                            value: "Forestry and related workers"
                        },
                        {
                            value: "Forestry labourers"
                        },
                        {
                            value: "Forestry technicians"
                        },
                        {
                            value: "Freight handlers (e.g. loading and unloading furniture, aircraft cargo)"
                        },
                        {
                            value: "Fruit, vegetable and related preservers"
                        },
                        {
                            value: "Jam maker"
                        },
                        {
                            value: "Cashew nuts maker"
                        },
                        {
                            value: "Coconut oil maker"
                        },
                        {
                            value: "Fumigators and other pest and weed controllers"
                        },
                        {
                            value: "Fur and leather preparing machine operators"
                        },
                        {
                            value: "Gallery, museum and library technicians"
                        },
                        {
                            value: "Garbage and recycling collectors"
                        },
                        {
                            value: "Garden and horticultural labourers"
                        },
                        {
                            value: "Gardeners, horticultural and nursery growers"
                        },
                        {
                            value: "Garment and related pattern-makers and cutters"
                        },
                        {
                            value: "General office clerks"
                        },
                        {
                            value: "Generalist medical practitioners"
                        },
                        {
                            value: "Geologists and geophysicists"
                        },
                        {
                            value: "Glass and ceramics plant operators"
                        },
                        {
                            value: "Glass makers, cutters, grinders and finishers"
                        },
                        {
                            value: "Glaziers"
                        },
                        {
                            value: "Government licensing officials"
                        },
                        {
                            value: "Government social benefits officials"
                        },
                        {
                            value: "Government tax and excise officials"
                        },
                        {
                            value: "Graphic and multimedia designers"
                        },
                        {
                            value: "Hairdressers"
                        },
                        {
                            value: "Hand and pedal vehicle drivers"
                        },
                        {
                            value: "Hand launderers and pressers"
                        },
                        {
                            value: "Hand packers"
                        },
                        {
                            value: "Handicraft workers in textile, leather and related materials"
                        },
                        {
                            value: "Handicraft workers in wood, basketry and related materials"
                        },
                        {
                            value: "Basket weaver (jipijapa)"
                        },
                        {
                            value: "Handicraft worker (kuxtal)"
                        },
                        {
                            value: "Handicraft workers not elsewhere classified"
                        },
                        {
                            value: "Health associate professionals not elsewhere classified"
                        },
                        {
                            value: "Health care assistants"
                        },
                        {
                            value: "Health professionals not elsewhere classified"
                        },
                        {
                            value: "Health services managers"
                        },
                        {
                            value: "Heavy truck and lorry drivers"
                        },
                        {
                            value: "Home-based personal care workers"
                        },
                        {
                            value: "Hotel managers"
                        },
                        {
                            value: "Hotel receptionists"
                        },
                        {
                            value: "House builders"
                        },
                        {
                            value: "Human resource managers"
                        },
                        {
                            value: "Hunters and trappers"
                        },
                        {
                            value: "Incinerator and water treatment plant operators"
                        },
                        {
                            value: "Industrial and production engineers"
                        },
                        {
                            value: "Information and communications technology installers and servicers"
                        },
                        {
                            value: "Cell phone repairer"
                        },
                        {
                            value: "Television repairer"
                        },
                        {
                            value: "Radio repairer"
                        },
                        {
                            value: "Computer repairer"
                        },
                        {
                            value: "Information and communications technology operations technicians"
                        },
                        {
                            value: "Information and communications technology sales professionals"
                        },
                        {
                            value: "Information and communications technology service managers"
                        },
                        {
                            value: "Information and communications technology user support technicians"
                        },
                        {
                            value: "Information technology trainers"
                        },
                        {
                            value: "Inland and coastal waters fishery workers"
                        },
                        {
                            value: "Insulation workers"
                        },
                        {
                            value: "Insurance representatives"
                        },
                        {
                            value: "Interior designers and decorators"
                        },
                        {
                            value: "Internet Café operator"
                        },
                        {
                            value: "Jewellery and precious-metal workers"
                        },
                        {
                            value: "Journalists"
                        },
                        {
                            value: "Judges"
                        },
                        {
                            value: "Kitchen helpers"
                        },
                        {
                            value: "Landscape architects"
                        },
                        {
                            value: "Laundry machine operators"
                        },
                        {
                            value: "Lawyers"
                        },
                        {
                            value: "Legal and related associate professionals"
                        },
                        {
                            value: "Legal professionals not elsewhere classified"
                        },
                        {
                            value: "Legal secretaries"
                        },
                        {
                            value: "Legislators"
                        },
                        {
                            value: "Librarians and related information professionals"
                        },
                        {
                            value: "Library clerks"
                        },
                        {
                            value: "Life science technicians (excluding medical)"
                        },
                        {
                            value: "Lifting truck operators"
                        },
                        {
                            value: "Livestock and dairy producers"
                        },
                        {
                            value: "Livestock farm labourers"
                        },
                        {
                            value: "Locomotive engine drivers"
                        },
                        {
                            value: "Mail carriers and sorting clerks"
                        },
                        {
                            value: "Management and organization analysts"
                        },
                        {
                            value: "Managing directors and chief executives"
                        },
                        {
                            value: "Manufacturing labourers not elsewhere classified"
                        },
                        {
                            value: "Manufacturing managers"
                        },
                        {
                            value: "Manufacturing supervisors"
                        },
                        {
                            value: "Mathematicians, actuaries and statisticians"
                        },
                        {
                            value: "Mechanical engineering technicians"
                        },
                        {
                            value: "Mechanical engineers"
                        },
                        {
                            value: "Mechanical machinery assemblers"
                        },
                        {
                            value: "Medical and dental prosthetic technicians"
                        },
                        {
                            value: "Medical and pathology laboratory technicians"
                        },
                        {
                            value: "Medical assistants"
                        },
                        {
                            value: "Medical imaging and therapeutic equipment technicians"
                        },
                        {
                            value: "Medical records and health information technicians"
                        },
                        {
                            value: "Medical secretaries"
                        },
                        {
                            value: "Messengers, package deliverers and luggage porters"
                        },
                        {
                            value: "Metal finishing, plating and coating machine operators"
                        },
                        {
                            value: "Metal moulders and core makers"
                        },
                        {
                            value: "Metal polishers, wheel grinders and tool sharpeners"
                        },
                        {
                            value: "Metal processing plant operators"
                        },
                        {
                            value: "Metal production process controllers"
                        },
                        {
                            value: "Metal working machine tool setters and operators"
                        },
                        {
                            value: "Meteorologists"
                        },
                        {
                            value: "Meter readers and vending-machine collectors"
                        },
                        {
                            value: "Midwifery associate professionals"
                        },
                        {
                            value: "Midwifery professionals"
                        },
                        {
                            value: "Mineral and stone processing plant operators"
                        },
                        {
                            value: "Miners and quarriers"
                        },
                        {
                            value: "Mining and metallurgical technicians"
                        },
                        {
                            value: "Mining and quarrying labourers"
                        },
                        {
                            value: "Mining engineers, metallurgists and related professionals"
                        },
                        {
                            value: "Mining managers"
                        },
                        {
                            value: "Mining supervisors"
                        },
                        {
                            value: "Mixed crop and animal producers"
                        },
                        {
                            value: "Mixed crop and livestock farm labourers"
                        },
                        {
                            value: "Mixed crop growers"
                        },
                        {
                            value: "Mobile farm and forestry plant operators"
                        },
                        {
                            value: "Motor vehicle mechanics and repairers"
                        },
                        {
                            value: "Motorcycle drivers"
                        },
                        {
                            value: "Musical instrument makers and tuners"
                        },
                        {
                            value: "Musicians, singers and composers"
                        },
                        {
                            value: "Non-commissioned armed forces officers"
                        },
                        {
                            value: "Nursing associate professionals"
                        },
                        {
                            value: "Nursing professionals"
                        },
                        {
                            value: "Odd job persons (handyman)"
                        },
                        {
                            value: "Office supervisors"
                        },
                        {
                            value: "Optometrists and ophthalmic opticians"
                        },
                        {
                            value: "Other artistic and cultural associate professionals"
                        },
                        {
                            value: "Other arts teachers"
                        },
                        {
                            value: "Other cleaning workers"
                        },
                        {
                            value: "Other language teachers"
                        },
                        {
                            value: "Other music teachers"
                        },
                        {
                            value: "own and traffic planners"
                        },
                        {
                            value: "Packing, bottling and labelling machine operators"
                        },
                        {
                            value: "Painters and related workers"
                        },
                        {
                            value: "Paper products machine operators"
                        },
                        {
                            value: "Paramedical practitioners"
                        },
                        {
                            value: "Pawnbrokers and money-lenders"
                        },
                        {
                            value: "Payroll clerks"
                        },
                        {
                            value: "Pelt dressers, tanners and fellmongers"
                        },
                        {
                            value: "Personal care workers in health services not elsewhere classified"
                        },
                        {
                            value: "Personal services workers not elsewhere classified"
                        },
                        {
                            value: "Personnel and careers professionals"
                        },
                        {
                            value: "Personnel clerks"
                        },
                        {
                            value: "Pet groomers and animal care workers"
                        },
                        {
                            value: "Petroleum and natural gas refining plant operators"
                        },
                        {
                            value: "Pharmaceutical technicians and assistants"
                        },
                        {
                            value: "Pharmacists"
                        },
                        {
                            value: "Philosophers, historians and political scientists"
                        },
                        {
                            value: "Photographers"
                        },
                        {
                            value: "Photographic products machine operators"
                        },
                        {
                            value: "Physical and engineering science technicians not elsewhere classified"
                        },
                        {
                            value: "Physicists and astronomers"
                        },
                        {
                            value: "Physiotherapists"
                        },
                        {
                            value: "Physiotherapy technicians and assistants"
                        },
                        {
                            value: "Plasterers"
                        },
                        {
                            value: "Plastic products machine operators"
                        },
                        {
                            value: "Plumbers and pipe fitters"
                        },
                        {
                            value: "Police inspectors and detectives"
                        },
                        {
                            value: "Police officers"
                        },
                        {
                            value: "Policy administration professionals"
                        },
                        {
                            value: "Policy and planning managers"
                        },
                        {
                            value: "Potters and related workers"
                        },
                        {
                            value: "Poultry producers"
                        },
                        {
                            value: "Power production plant operators"
                        },
                        {
                            value: "Pre-press technicians"
                        },
                        {
                            value: "Precision-instrument makers and repairers"
                        },
                        {
                            value: "Primary school teachers"
                        },
                        {
                            value: "Print finishing and binding workers"
                        },
                        {
                            value: "Printers"
                        },
                        {
                            value: "Prison guards"
                        },
                        {
                            value: "Process control technicians not elsewhere classified"
                        },
                        {
                            value: "Product and garment designers"
                        },
                        {
                            value: "Product graders and testers (excluding foods and beverages)"
                        },
                        {
                            value: "Production clerks"
                        },
                        {
                            value: "Professional services managers not elsewhere classified"
                        },
                        {
                            value: "Protective services workers not elsewhere classified"
                        },
                        {
                            value: "Psychologists"
                        },
                        {
                            value: "Public relations professionals"
                        },
                        {
                            value: "Pulp and papermaking plant operators"
                        },
                        {
                            value: "Railway brake, signal and switch operators"
                        },
                        {
                            value: "Real estate agents and property managers"
                        },
                        {
                            value: "Receptionists (general)"
                        },
                        {
                            value: "Refuse sorters"
                        },
                        {
                            value: "Regulatory government associate professionals not elsewhere classified"
                        },
                        {
                            value: "Religious associate professionals"
                        },
                        {
                            value: "Religious professionals"
                        },
                        {
                            value: "Research and development managers"
                        },
                        {
                            value: "Restaurant managers"
                        },
                        {
                            value: "Retail and wholesale trade managers"
                        },
                        {
                            value: "Riggers and cable splicers"
                        },
                        {
                            value: "Roofers"
                        },
                        {
                            value: "Rubber products machine operators"
                        },
                        {
                            value: "Sales and marketing managers"
                        },
                        {
                            value: "Sales demonstrators"
                        },
                        {
                            value: "Sales workers not elsewhere classified (Landlord/ Sale of ideal, chamoy, chocobanana, softdrink, at home)"
                        },
                        {
                            value: "School warden"
                        },
                        {
                            value: "Scribes and related workers"
                        },
                        {
                            value: "Secondary education teachers"
                        },
                        {
                            value: "Secretaries (general)"
                        },
                        {
                            value: "Securities and finance dealers and brokers"
                        },
                        {
                            value: "Security guards"
                        },
                        {
                            value: "Senior government officials"
                        },
                        {
                            value: "Senior officials of special-interest organizations"
                        },
                        {
                            value: "Service station attendants"
                        },
                        {
                            value: "Services managers not elsewhere classified"
                        },
                        {
                            value: "Sewing machine operators"
                        },
                        {
                            value: "Sewing, embroidery and related workers"
                        },
                        {
                            value: "Sheet-metal workers"
                        },
                        {
                            value: "Shelf fillers"
                        },
                        {
                            value: "Ships' deck crews and related workers"
                        },
                        {
                            value: "Ships' deck officers and pilots"
                        },
                        {
                            value: "Ships' engineers"
                        },
                        {
                            value: "Shoemakers and related workers"
                        },
                        {
                            value: "Shoemaking and related machine operators"
                        },
                        {
                            value: "Shop sales assistants"
                        },
                        {
                            value: "Shop supervisors"
                        },
                        {
                            value: "Shopkeepers (including those in Hindu and Chinese stores in the Free Zone)"
                        },
                        {
                            value: "Shot firers and blasters"
                        },
                        {
                            value: "Sign writers, decorative painters, engravers and etchers"
                        },
                        {
                            value: "Social welfare managers"
                        },
                        {
                            value: "Social work and counselling professionals"
                        },
                        {
                            value: "Social work associate professionals"
                        },
                        {
                            value: "Sociologists, anthropologists and related professionals"
                        },
                        {
                            value: "Software and applications developers and analysts not elsewhere classified"
                        },
                        {
                            value: "Software developers"
                        },
                        {
                            value: "Special needs teachers"
                        },
                        {
                            value: "Specialist medical practitioners"
                        },
                        {
                            value: "Sports coaches, instructors and officials"
                        },
                        {
                            value: "Sports, recreation and cultural centre managers"
                        },
                        {
                            value: "Spray painters and varnishers"
                        },
                        {
                            value: "Stall and market salespersons"
                        },
                        {
                            value: "Stationary plant and machine operators not elsewhere classified"
                        },
                        {
                            value: "Statistical, finance and insurance clerks"
                        },
                        {
                            value: "Statistical, mathematical and related associate professionals"
                        },
                        {
                            value: "Steam engine and boiler operators"
                        },
                        {
                            value: "Stock clerks"
                        },
                        {
                            value: "Stonemasons, stone cutters, splitters and carvers"
                        },
                        {
                            value: "Street and related service workers"
                        },
                        {
                            value: "Shoe polisher"
                        },
                        {
                            value: "Car window washer"
                        },
                        {
                            value: "Street food salespersons"
                        },
                        {
                            value: "Street vendors (excluding food)"
                        },
                        {
                            value: "Structural-metal preparers and erectors"
                        },
                        {
                            value: "Subsistence crop farmers"
                        },
                        {
                            value: "Subsistence fishers, hunters, trappers and gatherers"
                        },
                        {
                            value: "Subsistence livestock farmers"
                        },
                        {
                            value: "Subsistence mixed crop and livestock farmers"
                        },
                        {
                            value: "Supply, distribution and related managers"
                        },
                        {
                            value: "Survey and market research interviewers"
                        },
                        {
                            value: "Sweepers and related labourers"
                        },
                        {
                            value: "Systems administrators"
                        },
                        {
                            value: "Systems analysts"
                        },
                        {
                            value: "Tacos vendor"
                        },
                        {
                            value: "Tailors, dressmakers, furriers and hatters"
                        },
                        {
                            value: "Tamales vendor"
                        },
                        {
                            value: "Teachers' aides"
                        },
                        {
                            value: "Teaching professionals not elsewhere classified"
                        },
                        {
                            value: "Technical and medical sales professionals (excluding ICT)"
                        },
                        {
                            value: "Telecommunications engineering technicians"
                        },
                        {
                            value: "Telecommunications engineers"
                        },
                        {
                            value: "Telephone switchboard operators"
                        },
                        {
                            value: "Textile, fur and leather products machine operators not elsewhere classified"
                        },
                        {
                            value: "Tobacco preparers and tobacco products makers"
                        },
                        {
                            value: "Toolmakers and related workers"
                        },
                        {
                            value: "Tour guides"
                        },
                        {
                            value: "Trade brokers"
                        },
                        {
                            value: "Traditional and complementary medicine associate professionals"
                        },
                        {
                            value: "Traditional and complementary medicine professionals"
                        },
                        {
                            value: "Traditional chiefs and heads of villages"
                        },
                        {
                            value: "Training and staff development professionals"
                        },
                        {
                            value: "Translators, interpreters and other linguists"
                        },
                        {
                            value: "Transport clerks"
                        },
                        {
                            value: "Transport conductors"
                        },
                        {
                            value: "Travel attendants and travel stewards                                            "
                        },
                        {
                            value: "Travel consultants and clerks                                                    "
                        },
                        {
                            value: "Travel guides                                                                    "
                        },
                        {
                            value: "Tree and shrub crop growers                                                      "
                        },
                        {
                            value: "Typists and word processing operators                                            "
                        },
                        {
                            value: "Undertakers and embalmers                                                        "
                        },
                        {
                            value: "Underwater divers                                                                "
                        },
                        {
                            value: "University and higher education teachers                                         "
                        },
                        {
                            value: "Upholsterers and related workers                                                 "
                        },
                        {
                            value: "Valuers and loss assessors                                                       "
                        },
                        {
                            value: "Vehicle cleaners                                                                 "
                        },
                        {
                            value: "Veterinarians                                                                    "
                        },
                        {
                            value: "Veterinary technicians and assistants                                            "
                        },
                        {
                            value: "Visual artists                                                                   "
                        },
                        {
                            value: "Vocational education teachers                                                    "
                        },
                        {
                            value: "Waiters                                                                          "
                        },
                        {
                            value: "Water and firewood collectors                                                    "
                        },
                        {
                            value: "Weaving and knitting machine operators                                           "
                        },
                        {
                            value: "Web and multimedia developers                                                    "
                        },
                        {
                            value: "Web technicians                                                                  "
                        },
                        {
                            value: "Welders and flame cutters                                                         "
                        },
                        {
                            value: "Well drillers and borers and related workers                                     "
                        },
                        {
                            value: "Window cleaners                                                                  "
                        },
                        {
                            value: "Wood processing plant operators                                                  "
                        },
                        {
                            value: "Wood treaters                                                                    "
                        },
                        {
                            value: "Woodworking-machine tool setters and operators                                   "
                        }
                    ]
                    return commonArray;
                }
        };



    }
}


