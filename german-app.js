/**
 * Deutsch Lernen — Interactive German Learning App
 * Features: Lessons, Flashcards, Quizzes, Grammar, Common Phrases, Progress Tracking
 */

// ============================================================
// DATA — German vocabulary organized by category
// ============================================================
const VOCAB_DATA = {
  categories: [
    {
      id: "greetings",
      name: "Greetings & Basics",
      color: "red",
      icon: "Hi",
      words: [
        { de: "Hallo", en: "Hello", pron: "HAH-loh", example: "Hallo, wie geht's? — Hello, how are you?" },
        { de: "Guten Morgen", en: "Good morning", pron: "GOO-ten MOR-gen", example: "Guten Morgen! Haben Sie gut geschlafen? — Good morning! Did you sleep well?" },
        { de: "Guten Tag", en: "Good day", pron: "GOO-ten tahk", example: "Guten Tag, Herr Schmidt. — Good day, Mr. Schmidt." },
        { de: "Guten Abend", en: "Good evening", pron: "GOO-ten AH-bent", example: "Guten Abend, willkommen! — Good evening, welcome!" },
        { de: "Gute Nacht", en: "Good night", pron: "GOO-teh nakht", example: "Gute Nacht, schlaf gut! — Good night, sleep well!" },
        { de: "Auf Wiedersehen", en: "Goodbye", pron: "owf VEE-der-zey-en", example: "Auf Wiedersehen, bis morgen! — Goodbye, see you tomorrow!" },
        { de: "Tschüss", en: "Bye (informal)", pron: "chews", example: "Tschüss! Bis bald! — Bye! See you soon!" },
        { de: "Bitte", en: "Please / You're welcome", pron: "BIT-teh", example: "Bitte schön! — You're welcome!" },
        { de: "Danke", en: "Thank you", pron: "DAHN-keh", example: "Danke schön! — Thank you very much!" },
        { de: "Entschuldigung", en: "Excuse me / Sorry", pron: "ent-SHOOL-dee-goong", example: "Entschuldigung, wo ist der Bahnhof? — Excuse me, where is the train station?" },
        { de: "Ja", en: "Yes", pron: "yah", example: "Ja, natürlich! — Yes, of course!" },
        { de: "Nein", en: "No", pron: "nine", example: "Nein, danke. — No, thank you." },
        { de: "Wie geht es Ihnen?", en: "How are you? (formal)", pron: "vee gayt es EE-nen", example: "Wie geht es Ihnen heute? — How are you today?" },
        { de: "Mir geht es gut", en: "I'm doing well", pron: "meer gayt es goot", example: "Mir geht es gut, danke! — I'm doing well, thanks!" },
        { de: "Ich heiße...", en: "My name is...", pron: "ikh HY-seh", example: "Ich heiße Maria. — My name is Maria." },
        { de: "Willkommen", en: "Welcome", pron: "vil-KOM-en", example: "Willkommen in Deutschland! — Welcome to Germany!" },
        { de: "Bis bald", en: "See you soon", pron: "bis bahlt", example: "Bis bald, mein Freund! — See you soon, my friend!" },
        { de: "Bis später", en: "See you later", pron: "bis SHPAY-ter", example: "Bis später! — See you later!" },
        { de: "Vielen Dank", en: "Many thanks", pron: "FEE-len dahnk", example: "Vielen Dank für Ihre Hilfe! — Many thanks for your help!" },
        { de: "Keine Ursache", en: "No problem / Don't mention it", pron: "KY-neh OOR-zakh-eh", example: "Keine Ursache! — Don't mention it!" },
        { de: "Wie bitte?", en: "Pardon? / What did you say?", pron: "vee BIT-teh", example: "Wie bitte? Ich habe das nicht verstanden. — Pardon? I didn't understand that." },
        { de: "Genau", en: "Exactly / Correct", pron: "geh-NOW", example: "Genau, das stimmt! — Exactly, that's right!" },
        { de: "Natürlich", en: "Of course / Naturally", pron: "nah-TEWR-likh", example: "Natürlich helfe ich dir! — Of course I'll help you!" },
        { de: "Vielleicht", en: "Maybe / Perhaps", pron: "fee-LYKHT", example: "Vielleicht morgen. — Maybe tomorrow." },
        { de: "Herzlichen Glückwunsch", en: "Congratulations", pron: "HERTS-likh-en GLEWK-voonsh", example: "Herzlichen Glückwunsch zum Geburtstag! — Happy birthday!" },
      ]
    },
    {
      id: "numbers",
      name: "Numbers",
      color: "blue",
      icon: "123",
      words: [
        { de: "null", en: "zero (0)", pron: "nool", example: "Null Grad. — Zero degrees." },
        { de: "eins", en: "one (1)", pron: "eyns", example: "Ich habe eins. — I have one." },
        { de: "zwei", en: "two (2)", pron: "tsvy", example: "Zwei Kaffee, bitte. — Two coffees, please." },
        { de: "drei", en: "three (3)", pron: "dry", example: "Drei Tage. — Three days." },
        { de: "vier", en: "four (4)", pron: "feer", example: "Vier Personen. — Four people." },
        { de: "fünf", en: "five (5)", pron: "fewnf", example: "Fünf Minuten. — Five minutes." },
        { de: "sechs", en: "six (6)", pron: "zeks", example: "Sechs Uhr. — Six o'clock." },
        { de: "sieben", en: "seven (7)", pron: "ZEE-ben", example: "Sieben Tage die Woche. — Seven days a week." },
        { de: "acht", en: "eight (8)", pron: "akht", example: "Acht Stunden. — Eight hours." },
        { de: "neun", en: "nine (9)", pron: "noyn", example: "Neun Euro. — Nine euros." },
        { de: "zehn", en: "ten (10)", pron: "tsayn", example: "Zehn Kilometer. — Ten kilometers." },
        { de: "elf", en: "eleven (11)", pron: "elf", example: "Elf Spieler. — Eleven players." },
        { de: "zwölf", en: "twelve (12)", pron: "tsvurlf", example: "Zwölf Monate im Jahr. — Twelve months in a year." },
        { de: "dreizehn", en: "thirteen (13)", pron: "DRY-tsayn", example: "Dreizehn ist eine Primzahl. — Thirteen is a prime number." },
        { de: "vierzehn", en: "fourteen (14)", pron: "FEER-tsayn", example: "In vierzehn Tagen. — In fourteen days." },
        { de: "fünfzehn", en: "fifteen (15)", pron: "FEWNF-tsayn", example: "Fünfzehn Minuten Pause. — Fifteen minutes break." },
        { de: "zwanzig", en: "twenty (20)", pron: "TSVAN-tsikh", example: "Zwanzig Euro. — Twenty euros." },
        { de: "dreißig", en: "thirty (30)", pron: "DRY-sikh", example: "Dreißig Grad. — Thirty degrees." },
        { de: "vierzig", en: "forty (40)", pron: "FEER-tsikh", example: "Er ist vierzig Jahre alt. — He is forty years old." },
        { de: "fünfzig", en: "fifty (50)", pron: "FEWNF-tsikh", example: "Fünfzig Prozent. — Fifty percent." },
        { de: "sechzig", en: "sixty (60)", pron: "ZEKH-tsikh", example: "Sechzig Sekunden. — Sixty seconds." },
        { de: "siebzig", en: "seventy (70)", pron: "ZEEP-tsikh", example: "Siebzig Kilometer pro Stunde. — Seventy kilometers per hour." },
        { de: "achtzig", en: "eighty (80)", pron: "AKHT-tsikh", example: "Mein Opa ist achtzig. — My grandpa is eighty." },
        { de: "neunzig", en: "ninety (90)", pron: "NOYN-tsikh", example: "Neunzig Punkte. — Ninety points." },
        { de: "hundert", en: "one hundred (100)", pron: "HOON-dert", example: "Hundert Prozent. — One hundred percent." },
        { de: "tausend", en: "one thousand (1000)", pron: "TOW-zent", example: "Tausend Dank! — A thousand thanks!" },
        { de: "eine Million", en: "one million", pron: "EYE-neh mil-YOHN", example: "Eine Million Menschen. — One million people." },
      ]
    },
    {
      id: "food",
      name: "Food & Drink",
      color: "orange",
      icon: "Food",
      words: [
        { de: "das Brot", en: "the bread", pron: "dahs broht", example: "Das Brot ist frisch. — The bread is fresh." },
        { de: "der Käse", en: "the cheese", pron: "dare KAY-zeh", example: "Ich möchte Käse. — I would like cheese." },
        { de: "das Wasser", en: "the water", pron: "dahs VAH-ser", example: "Ein Glas Wasser, bitte. — A glass of water, please." },
        { de: "der Kaffee", en: "the coffee", pron: "dare KAH-fay", example: "Einen Kaffee, bitte. — A coffee, please." },
        { de: "das Bier", en: "the beer", pron: "dahs beer", example: "Ein Bier, bitte! — A beer, please!" },
        { de: "der Wein", en: "the wine", pron: "dare vine", example: "Ein Glas Wein. — A glass of wine." },
        { de: "das Fleisch", en: "the meat", pron: "dahs flysh", example: "Ich esse kein Fleisch. — I don't eat meat." },
        { de: "der Fisch", en: "the fish", pron: "dare fish", example: "Der Fisch ist lecker. — The fish is delicious." },
        { de: "das Obst", en: "the fruit", pron: "dahs ohpst", example: "Ich kaufe Obst. — I'm buying fruit." },
        { de: "das Gemüse", en: "the vegetables", pron: "dahs geh-MEW-zeh", example: "Gemüse ist gesund. — Vegetables are healthy." },
        { de: "die Milch", en: "the milk", pron: "dee milkh", example: "Milch mit Kaffee. — Milk with coffee." },
        { de: "der Tee", en: "the tea", pron: "dare tay", example: "Einen Tee, bitte. — A tea, please." },
        { de: "der Zucker", en: "the sugar", pron: "dare TSOO-ker", example: "Ohne Zucker, bitte. — Without sugar, please." },
        { de: "die Suppe", en: "the soup", pron: "dee ZOO-peh", example: "Die Suppe ist heiß. — The soup is hot." },
        { de: "das Ei", en: "the egg", pron: "dahs eye", example: "Zum Frühstück ein Ei. — An egg for breakfast." },
        { de: "der Apfel", en: "the apple", pron: "dare AHP-fel", example: "Der Apfel ist rot. — The apple is red." },
        { de: "die Kartoffel", en: "the potato", pron: "dee kar-TOF-el", example: "Kartoffeln mit Butter. — Potatoes with butter." },
        { de: "das Hähnchen", en: "the chicken", pron: "dahs HAYN-khen", example: "Ich bestelle das Hähnchen. — I'll order the chicken." },
        { de: "der Reis", en: "the rice", pron: "dare ryce", example: "Reis mit Gemüse. — Rice with vegetables." },
        { de: "die Nudeln", en: "the noodles / pasta", pron: "dee NOO-deln", example: "Nudeln mit Soße. — Pasta with sauce." },
        { de: "der Kuchen", en: "the cake", pron: "dare KOO-khen", example: "Der Kuchen schmeckt wunderbar. — The cake tastes wonderful." },
        { de: "das Eis", en: "the ice cream", pron: "dahs ice", example: "Zwei Kugeln Eis, bitte. — Two scoops of ice cream, please." },
        { de: "die Schokolade", en: "the chocolate", pron: "dee sho-koh-LAH-deh", example: "Ich liebe Schokolade. — I love chocolate." },
        { de: "der Salat", en: "the salad", pron: "dare zah-LAHT", example: "Einen Salat, bitte. — A salad, please." },
        { de: "das Frühstück", en: "the breakfast", pron: "dahs FREW-shtewk", example: "Was gibt es zum Frühstück? — What's for breakfast?" },
        { de: "das Mittagessen", en: "the lunch", pron: "dahs MIT-tahk-es-en", example: "Mittagessen um zwölf. — Lunch at twelve." },
        { de: "das Abendessen", en: "the dinner", pron: "dahs AH-bent-es-en", example: "Was kochen wir zum Abendessen? — What do we cook for dinner?" },
      ]
    },
    {
      id: "travel",
      name: "Travel & Directions",
      color: "green",
      icon: "Go",
      words: [
        { de: "der Bahnhof", en: "the train station", pron: "dare BAHN-hohf", example: "Wo ist der Bahnhof? — Where is the train station?" },
        { de: "der Flughafen", en: "the airport", pron: "dare FLOOG-hah-fen", example: "Zum Flughafen, bitte. — To the airport, please." },
        { de: "das Hotel", en: "the hotel", pron: "dahs hoh-TEL", example: "Das Hotel ist sehr schön. — The hotel is very nice." },
        { de: "die Straße", en: "the street", pron: "dee SHTRAH-seh", example: "Die Straße ist lang. — The street is long." },
        { de: "rechts", en: "right", pron: "rekhts", example: "Gehen Sie rechts. — Go right." },
        { de: "links", en: "left", pron: "links", example: "Dann links abbiegen. — Then turn left." },
        { de: "geradeaus", en: "straight ahead", pron: "geh-RAH-deh-ows", example: "Gehen Sie geradeaus. — Go straight ahead." },
        { de: "die Karte", en: "the map / ticket", pron: "dee KAR-teh", example: "Haben Sie eine Karte? — Do you have a map?" },
        { de: "der Zug", en: "the train", pron: "dare tsoog", example: "Der Zug fährt um acht. — The train departs at eight." },
        { de: "der Bus", en: "the bus", pron: "dare boos", example: "Wann kommt der Bus? — When does the bus come?" },
        { de: "das Taxi", en: "the taxi", pron: "dahs TAK-see", example: "Rufen Sie ein Taxi. — Call a taxi." },
        { de: "weit", en: "far", pron: "vyte", example: "Ist es weit? — Is it far?" },
        { de: "nah", en: "near / close", pron: "nah", example: "Es ist ganz nah. — It's very close." },
        { de: "die Haltestelle", en: "the stop (bus/tram)", pron: "dee HAL-teh-shtel-leh", example: "Die nächste Haltestelle. — The next stop." },
        { de: "die Fahrkarte", en: "the ticket", pron: "dee FAR-kar-teh", example: "Eine Fahrkarte nach München, bitte. — A ticket to Munich, please." },
        { de: "der Koffer", en: "the suitcase", pron: "dare KOF-er", example: "Mein Koffer ist schwer. — My suitcase is heavy." },
        { de: "der Reisepass", en: "the passport", pron: "dare RYE-zeh-pahs", example: "Ihren Reisepass, bitte. — Your passport, please." },
        { de: "die Brücke", en: "the bridge", pron: "dee BREW-keh", example: "Gehen Sie über die Brücke. — Go over the bridge." },
        { de: "die Kreuzung", en: "the intersection", pron: "dee KROY-tsoong", example: "An der nächsten Kreuzung. — At the next intersection." },
        { de: "der Ausgang", en: "the exit", pron: "dare OWS-gang", example: "Wo ist der Ausgang? — Where is the exit?" },
        { de: "der Eingang", en: "the entrance", pron: "dare AYN-gang", example: "Der Eingang ist dort. — The entrance is there." },
        { de: "die Abfahrt", en: "the departure", pron: "dee AHP-fart", example: "Die Abfahrt ist um neun. — The departure is at nine." },
        { de: "die Ankunft", en: "the arrival", pron: "dee AHN-koonft", example: "Die Ankunft ist pünktlich. — The arrival is on time." },
      ]
    },
    {
      id: "family",
      name: "Family & People",
      color: "purple",
      icon: "Fam",
      words: [
        { de: "die Mutter", en: "the mother", pron: "dee MOO-ter", example: "Meine Mutter kocht gut. — My mother cooks well." },
        { de: "der Vater", en: "the father", pron: "dare FAH-ter", example: "Mein Vater arbeitet viel. — My father works a lot." },
        { de: "die Schwester", en: "the sister", pron: "dee SHVES-ter", example: "Meine Schwester ist älter. — My sister is older." },
        { de: "der Bruder", en: "the brother", pron: "dare BROO-der", example: "Mein Bruder wohnt in Berlin. — My brother lives in Berlin." },
        { de: "die Tochter", en: "the daughter", pron: "dee TOKH-ter", example: "Ihre Tochter ist nett. — Your daughter is nice." },
        { de: "der Sohn", en: "the son", pron: "dare zohn", example: "Sein Sohn ist Student. — His son is a student." },
        { de: "die Großmutter", en: "the grandmother", pron: "dee GROHS-moo-ter", example: "Meine Großmutter erzählt Geschichten. — My grandmother tells stories." },
        { de: "der Großvater", en: "the grandfather", pron: "dare GROHS-fah-ter", example: "Mein Großvater ist achtzig. — My grandfather is eighty." },
        { de: "der Freund", en: "the friend (male)", pron: "dare froynt", example: "Er ist mein bester Freund. — He is my best friend." },
        { de: "die Freundin", en: "the friend (female)", pron: "dee FROYN-din", example: "Sie ist meine beste Freundin. — She is my best friend." },
        { de: "das Kind", en: "the child", pron: "dahs kint", example: "Das Kind spielt draußen. — The child plays outside." },
        { de: "die Frau", en: "the woman / wife", pron: "dee frow", example: "Die Frau liest ein Buch. — The woman reads a book." },
        { de: "der Mann", en: "the man / husband", pron: "dare mahn", example: "Der Mann ist groß. — The man is tall." },
        { de: "die Eltern", en: "the parents", pron: "dee EL-tern", example: "Meine Eltern leben in Hamburg. — My parents live in Hamburg." },
        { de: "die Geschwister", en: "the siblings", pron: "dee geh-SHVIS-ter", example: "Ich habe drei Geschwister. — I have three siblings." },
        { de: "der Onkel", en: "the uncle", pron: "dare OON-kel", example: "Mein Onkel ist Arzt. — My uncle is a doctor." },
        { de: "die Tante", en: "the aunt", pron: "dee TAHN-teh", example: "Meine Tante wohnt in Wien. — My aunt lives in Vienna." },
        { de: "der Cousin", en: "the cousin (male)", pron: "dare koo-ZAHN", example: "Mein Cousin kommt morgen. — My cousin is coming tomorrow." },
        { de: "die Cousine", en: "the cousin (female)", pron: "dee koo-ZEE-neh", example: "Meine Cousine studiert Medizin. — My cousin studies medicine." },
        { de: "das Baby", en: "the baby", pron: "dahs BAY-bee", example: "Das Baby schläft. — The baby is sleeping." },
        { de: "der Nachbar", en: "the neighbor", pron: "dare NAKH-bar", example: "Unser Nachbar ist freundlich. — Our neighbor is friendly." },
        { de: "der Lehrer", en: "the teacher (male)", pron: "dare LAY-rer", example: "Der Lehrer ist streng. — The teacher is strict." },
        { de: "die Lehrerin", en: "the teacher (female)", pron: "dee LAY-rer-in", example: "Die Lehrerin erklärt es gut. — The teacher explains it well." },
      ]
    },
    {
      id: "time",
      name: "Time & Days",
      color: "teal",
      icon: "Time",
      words: [
        { de: "Montag", en: "Monday", pron: "MOHN-tahk", example: "Am Montag gehe ich arbeiten. — On Monday I go to work." },
        { de: "Dienstag", en: "Tuesday", pron: "DEENS-tahk", example: "Dienstag ist Yoga-Tag. — Tuesday is yoga day." },
        { de: "Mittwoch", en: "Wednesday", pron: "MIT-vokh", example: "Am Mittwoch koche ich. — On Wednesday I cook." },
        { de: "Donnerstag", en: "Thursday", pron: "DON-ers-tahk", example: "Donnerstag regnet es. — It rains on Thursday." },
        { de: "Freitag", en: "Friday", pron: "FRY-tahk", example: "Freitag ist mein Lieblingstag. — Friday is my favorite day." },
        { de: "Samstag", en: "Saturday", pron: "ZAHMS-tahk", example: "Am Samstag gehen wir einkaufen. — On Saturday we go shopping." },
        { de: "Sonntag", en: "Sunday", pron: "ZOHN-tahk", example: "Sonntag ruhen wir aus. — On Sunday we rest." },
        { de: "heute", en: "today", pron: "HOY-teh", example: "Was machen wir heute? — What are we doing today?" },
        { de: "morgen", en: "tomorrow", pron: "MOR-gen", example: "Bis morgen! — See you tomorrow!" },
        { de: "gestern", en: "yesterday", pron: "GES-tern", example: "Gestern war schön. — Yesterday was nice." },
        { de: "die Stunde", en: "the hour", pron: "dee SHTOON-deh", example: "Eine Stunde Pause. — An hour break." },
        { de: "die Minute", en: "the minute", pron: "dee mee-NOO-teh", example: "Fünf Minuten noch. — Five more minutes." },
        { de: "jetzt", en: "now", pron: "yetst", example: "Jetzt sofort! — Right now!" },
        { de: "früh", en: "early", pron: "frew", example: "Ich stehe früh auf. — I get up early." },
        { de: "spät", en: "late", pron: "shpayt", example: "Es ist schon spät. — It's already late." },
        { de: "Januar", en: "January", pron: "YAH-noo-ar", example: "Im Januar schneit es oft. — It often snows in January." },
        { de: "Februar", en: "February", pron: "FAY-broo-ar", example: "Februar ist kurz. — February is short." },
        { de: "März", en: "March", pron: "merts", example: "Im März wird es wärmer. — It gets warmer in March." },
        { de: "April", en: "April", pron: "ah-PRIL", example: "April, April! — April fool!" },
        { de: "Mai", en: "May", pron: "my", example: "Im Mai blühen die Blumen. — Flowers bloom in May." },
        { de: "Juni", en: "June", pron: "YOO-nee", example: "Im Juni ist Sommer. — In June it's summer." },
        { de: "Juli", en: "July", pron: "YOO-lee", example: "Juli ist der heißeste Monat. — July is the hottest month." },
        { de: "August", en: "August", pron: "ow-GOOST", example: "Im August haben wir Urlaub. — We have vacation in August." },
        { de: "September", en: "September", pron: "zep-TEM-ber", example: "September ist Erntezeit. — September is harvest time." },
        { de: "Oktober", en: "October", pron: "ok-TOH-ber", example: "Oktoberfest im Oktober! — Oktoberfest in October!" },
        { de: "November", en: "November", pron: "no-VEM-ber", example: "November ist grau. — November is grey." },
        { de: "Dezember", en: "December", pron: "day-TSEM-ber", example: "Weihnachten im Dezember. — Christmas in December." },
        { de: "die Woche", en: "the week", pron: "dee VOH-kheh", example: "Nächste Woche reise ich. — I'm traveling next week." },
        { de: "der Monat", en: "the month", pron: "dare MOH-naht", example: "Diesen Monat ist viel los. — A lot is going on this month." },
        { de: "das Jahr", en: "the year", pron: "dahs yar", example: "Dieses Jahr lerne ich Deutsch. — This year I'm learning German." },
      ]
    },
    {
      id: "colors",
      name: "Colors & Adjectives",
      color: "rose",
      icon: "Adj",
      words: [
        { de: "rot", en: "red", pron: "roht", example: "Das Auto ist rot. — The car is red." },
        { de: "blau", en: "blue", pron: "blow", example: "Der Himmel ist blau. — The sky is blue." },
        { de: "grün", en: "green", pron: "grewn", example: "Das Gras ist grün. — The grass is green." },
        { de: "gelb", en: "yellow", pron: "gelp", example: "Die Sonne ist gelb. — The sun is yellow." },
        { de: "schwarz", en: "black", pron: "shvarts", example: "Der Kaffee ist schwarz. — The coffee is black." },
        { de: "weiß", en: "white", pron: "vice", example: "Schnee ist weiß. — Snow is white." },
        { de: "groß", en: "big / tall", pron: "grohs", example: "Das Haus ist groß. — The house is big." },
        { de: "klein", en: "small / little", pron: "kline", example: "Die Katze ist klein. — The cat is small." },
        { de: "schön", en: "beautiful / nice", pron: "shurn", example: "Das Wetter ist schön. — The weather is nice." },
        { de: "gut", en: "good", pron: "goot", example: "Das Essen ist gut. — The food is good." },
        { de: "schlecht", en: "bad", pron: "shlekht", example: "Schlechtes Wetter heute. — Bad weather today." },
        { de: "schnell", en: "fast", pron: "shnell", example: "Der Zug ist schnell. — The train is fast." },
        { de: "langsam", en: "slow", pron: "LAHNG-zahm", example: "Bitte langsam sprechen. — Please speak slowly." },
        { de: "neu", en: "new", pron: "noy", example: "Ein neues Buch. — A new book." },
        { de: "alt", en: "old", pron: "ahlt", example: "Die Stadt ist alt. — The city is old." },
        { de: "braun", en: "brown", pron: "brown", example: "Der Hund ist braun. — The dog is brown." },
        { de: "grau", en: "grey", pron: "grow", example: "Der Himmel ist grau. — The sky is grey." },
        { de: "rosa", en: "pink", pron: "ROH-zah", example: "Die Blume ist rosa. — The flower is pink." },
        { de: "lila", en: "purple", pron: "LEE-lah", example: "Meine Lieblingsfarbe ist lila. — My favorite color is purple." },
        { de: "orange", en: "orange", pron: "oh-RAHN-zheh", example: "Die Orange ist orange. — The orange is orange." },
        { de: "heiß", en: "hot", pron: "hice", example: "Der Kaffee ist heiß. — The coffee is hot." },
        { de: "kalt", en: "cold", pron: "kahlt", example: "Es ist kalt draußen. — It's cold outside." },
        { de: "warm", en: "warm", pron: "varm", example: "Das Wasser ist warm. — The water is warm." },
        { de: "müde", en: "tired", pron: "MEW-deh", example: "Ich bin so müde. — I am so tired." },
        { de: "hungrig", en: "hungry", pron: "HOONG-rikh", example: "Ich bin hungrig. — I am hungry." },
        { de: "durstig", en: "thirsty", pron: "DOOR-stikh", example: "Ich bin durstig. — I am thirsty." },
        { de: "glücklich", en: "happy", pron: "GLEWK-likh", example: "Ich bin so glücklich! — I am so happy!" },
        { de: "traurig", en: "sad", pron: "TROW-rikh", example: "Warum bist du traurig? — Why are you sad?" },
        { de: "wichtig", en: "important", pron: "VIKH-tikh", example: "Das ist sehr wichtig. — That is very important." },
        { de: "einfach", en: "easy / simple", pron: "AYN-fakh", example: "Die Aufgabe ist einfach. — The task is easy." },
        { de: "schwer", en: "hard / heavy", pron: "shvair", example: "Das ist schwer zu verstehen. — That is hard to understand." },
      ]
    },
    {
      id: "verbs",
      name: "Common Verbs",
      color: "gold",
      icon: "Verb",
      words: [
        { de: "sein", en: "to be", pron: "zine", example: "Ich bin müde. — I am tired." },
        { de: "haben", en: "to have", pron: "HAH-ben", example: "Ich habe Hunger. — I am hungry. (I have hunger)" },
        { de: "gehen", en: "to go", pron: "GAY-en", example: "Ich gehe nach Hause. — I'm going home." },
        { de: "kommen", en: "to come", pron: "KOM-en", example: "Wann kommst du? — When are you coming?" },
        { de: "machen", en: "to do / make", pron: "MAHKH-en", example: "Was machst du? — What are you doing?" },
        { de: "sprechen", en: "to speak", pron: "SHPREKH-en", example: "Ich spreche Deutsch. — I speak German." },
        { de: "essen", en: "to eat", pron: "ESS-en", example: "Wir essen um sechs. — We eat at six." },
        { de: "trinken", en: "to drink", pron: "TRINK-en", example: "Was möchten Sie trinken? — What would you like to drink?" },
        { de: "kaufen", en: "to buy", pron: "KOW-fen", example: "Ich kaufe Brot. — I'm buying bread." },
        { de: "wissen", en: "to know (a fact)", pron: "VIS-en", example: "Ich weiß es nicht. — I don't know." },
        { de: "kennen", en: "to know (be familiar with)", pron: "KEN-en", example: "Kennen Sie Berlin? — Are you familiar with Berlin?" },
        { de: "wohnen", en: "to live / reside", pron: "VOH-nen", example: "Wo wohnen Sie? — Where do you live?" },
        { de: "arbeiten", en: "to work", pron: "AR-by-ten", example: "Ich arbeite bei einer Firma. — I work at a company." },
        { de: "lernen", en: "to learn", pron: "LAIR-nen", example: "Ich lerne Deutsch! — I'm learning German!" },
        { de: "schlafen", en: "to sleep", pron: "SHLAH-fen", example: "Ich schlafe um zehn. — I sleep at ten." },
        { de: "lesen", en: "to read", pron: "LAY-zen", example: "Ich lese ein Buch. — I'm reading a book." },
        { de: "schreiben", en: "to write", pron: "SHRY-ben", example: "Ich schreibe einen Brief. — I'm writing a letter." },
        { de: "fahren", en: "to drive / ride", pron: "FAR-en", example: "Ich fahre mit dem Auto. — I'm driving by car." },
        { de: "fliegen", en: "to fly", pron: "FLEE-gen", example: "Wir fliegen nach Berlin. — We're flying to Berlin." },
        { de: "sehen", en: "to see", pron: "ZAY-en", example: "Ich sehe einen Vogel. — I see a bird." },
        { de: "hören", en: "to hear / listen", pron: "HUR-en", example: "Ich höre Musik. — I'm listening to music." },
        { de: "verstehen", en: "to understand", pron: "fair-SHTAY-en", example: "Ich verstehe dich. — I understand you." },
        { de: "helfen", en: "to help", pron: "HEL-fen", example: "Können Sie mir helfen? — Can you help me?" },
        { de: "finden", en: "to find", pron: "FIN-den", example: "Ich kann es nicht finden. — I can't find it." },
        { de: "denken", en: "to think", pron: "DENK-en", example: "Ich denke, das stimmt. — I think that's right." },
        { de: "brauchen", en: "to need", pron: "BROW-khen", example: "Ich brauche Hilfe. — I need help." },
        { de: "mögen", en: "to like", pron: "MUR-gen", example: "Ich mag Schokolade. — I like chocolate." },
        { de: "können", en: "to be able to / can", pron: "KUR-nen", example: "Ich kann schwimmen. — I can swim." },
        { de: "müssen", en: "to have to / must", pron: "MEW-sen", example: "Ich muss gehen. — I have to go." },
        { de: "wollen", en: "to want", pron: "VOL-en", example: "Ich will Deutsch lernen. — I want to learn German." },
      ]
    },
    {
      id: "places",
      name: "Places & Buildings",
      color: "blue",
      icon: "Map",
      words: [
        { de: "die Stadt", en: "the city", pron: "dee shtaht", example: "Die Stadt ist schön. — The city is beautiful." },
        { de: "das Dorf", en: "the village", pron: "dahs dorf", example: "Das Dorf ist klein. — The village is small." },
        { de: "das Land", en: "the country / countryside", pron: "dahs lahnt", example: "Wir leben auf dem Land. — We live in the countryside." },
        { de: "die Schule", en: "the school", pron: "dee SHOO-leh", example: "Die Kinder gehen zur Schule. — The children go to school." },
        { de: "die Universität", en: "the university", pron: "dee oo-nee-vair-zee-TAYT", example: "Sie studiert an der Universität. — She studies at the university." },
        { de: "das Krankenhaus", en: "the hospital", pron: "dahs KRAN-ken-hows", example: "Er ist im Krankenhaus. — He is in the hospital." },
        { de: "die Apotheke", en: "the pharmacy", pron: "dee ah-poh-TAY-keh", example: "Die Apotheke ist dort drüben. — The pharmacy is over there." },
        { de: "die Kirche", en: "the church", pron: "dee KEER-kheh", example: "Die Kirche ist sehr alt. — The church is very old." },
        { de: "der Supermarkt", en: "the supermarket", pron: "dare ZOO-per-markt", example: "Ich gehe zum Supermarkt. — I'm going to the supermarket." },
        { de: "die Bäckerei", en: "the bakery", pron: "dee bek-er-EYE", example: "Frisches Brot von der Bäckerei. — Fresh bread from the bakery." },
        { de: "das Restaurant", en: "the restaurant", pron: "dahs res-toh-RAHNG", example: "Das Restaurant ist ausgezeichnet. — The restaurant is excellent." },
        { de: "die Bank", en: "the bank", pron: "dee bahnk", example: "Ich muss zur Bank gehen. — I need to go to the bank." },
        { de: "die Post", en: "the post office", pron: "dee post", example: "Ich bringe den Brief zur Post. — I'm taking the letter to the post office." },
        { de: "das Museum", en: "the museum", pron: "dahs moo-ZAY-oom", example: "Das Museum ist interessant. — The museum is interesting." },
        { de: "der Park", en: "the park", pron: "dare park", example: "Wir gehen in den Park. — We're going to the park." },
        { de: "der Markt", en: "the market", pron: "dare markt", example: "Auf dem Markt gibt es Obst. — There is fruit at the market." },
        { de: "die Bibliothek", en: "the library", pron: "dee bib-lee-oh-TAYK", example: "Ich lese in der Bibliothek. — I read in the library." },
        { de: "das Büro", en: "the office", pron: "dahs bew-ROH", example: "Ich bin im Büro. — I am in the office." },
      ]
    },
    {
      id: "body",
      name: "Body & Health",
      color: "teal",
      icon: "Body",
      words: [
        { de: "der Kopf", en: "the head", pron: "dare kopf", example: "Mir tut der Kopf weh. — My head hurts." },
        { de: "das Auge", en: "the eye", pron: "dahs OW-geh", example: "Sie hat blaue Augen. — She has blue eyes." },
        { de: "die Nase", en: "the nose", pron: "dee NAH-zeh", example: "Seine Nase ist groß. — His nose is big." },
        { de: "der Mund", en: "the mouth", pron: "dare moont", example: "Mach den Mund auf. — Open your mouth." },
        { de: "das Ohr", en: "the ear", pron: "dahs ohr", example: "Ich habe Ohrenschmerzen. — I have an earache." },
        { de: "die Hand", en: "the hand", pron: "dee hahnt", example: "Gib mir die Hand. — Give me your hand." },
        { de: "der Fuß", en: "the foot", pron: "dare foos", example: "Mein Fuß tut weh. — My foot hurts." },
        { de: "das Bein", en: "the leg", pron: "dahs bine", example: "Sein Bein ist gebrochen. — His leg is broken." },
        { de: "der Arm", en: "the arm", pron: "dare arm", example: "Mein Arm tut weh. — My arm hurts." },
        { de: "der Finger", en: "the finger", pron: "dare FING-er", example: "Ich habe zehn Finger. — I have ten fingers." },
        { de: "der Rücken", en: "the back", pron: "dare REW-ken", example: "Mein Rücken schmerzt. — My back aches." },
        { de: "das Herz", en: "the heart", pron: "dahs herts", example: "Mein Herz schlägt schnell. — My heart beats fast." },
        { de: "der Bauch", en: "the belly / stomach", pron: "dare bowkh", example: "Ich habe Bauchschmerzen. — I have a stomachache." },
        { de: "der Zahn", en: "the tooth", pron: "dare tsahn", example: "Ich muss zum Zahnarzt. — I need to go to the dentist." },
        { de: "das Haar", en: "the hair", pron: "dahs har", example: "Sie hat langes Haar. — She has long hair." },
        { de: "gesund", en: "healthy", pron: "geh-ZOONT", example: "Obst ist gesund. — Fruit is healthy." },
        { de: "krank", en: "sick / ill", pron: "krahnk", example: "Ich bin krank. — I am sick." },
        { de: "der Schmerz", en: "the pain", pron: "dare shmerts", example: "Wo ist der Schmerz? — Where is the pain?" },
      ]
    }
  ]
};

// ============================================================
// GRAMMAR DATA
// ============================================================
const GRAMMAR_DATA = [
  {
    id: "articles",
    name: "Articles (Der, Die, Das)",
    description: "German has three genders: masculine (der), feminine (die), and neuter (das). Unlike English, you must learn the gender with each noun. The article also changes based on the case (nominative, accusative, dative, genitive).",
    tables: [
      {
        title: "Definite Articles (the)",
        headers: ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
        rows: [
          ["Nominative", "der", "die", "das", "die"],
          ["Accusative", "den", "die", "das", "die"],
          ["Dative", "dem", "der", "dem", "den"],
          ["Genitive", "des", "der", "des", "der"]
        ]
      },
      {
        title: "Indefinite Articles (a/an)",
        headers: ["Case", "Masculine", "Feminine", "Neuter"],
        rows: [
          ["Nominative", "ein", "eine", "ein"],
          ["Accusative", "einen", "eine", "ein"],
          ["Dative", "einem", "einer", "einem"],
          ["Genitive", "eines", "einer", "eines"]
        ]
      }
    ],
    examples: [
      { de: "Der Mann liest ein Buch.", en: "The man reads a book." },
      { de: "Ich sehe den Mann.", en: "I see the man. (accusative)" },
      { de: "Ich gebe dem Mann das Buch.", en: "I give the man the book. (dative)" }
    ],
    note: "Tip: Always learn nouns with their article! Instead of memorizing \"Haus\" alone, learn \"das Haus\" (the house)."
  },
  {
    id: "pronouns",
    name: "Personal Pronouns",
    description: "German personal pronouns change based on case, just like English (I vs. me). German also distinguishes between formal and informal 'you' — use 'Sie' with strangers and 'du' with friends.",
    tables: [
      {
        title: "Personal Pronouns",
        headers: ["English", "Nominative", "Accusative", "Dative"],
        rows: [
          ["I", "ich", "mich", "mir"],
          ["you (informal)", "du", "dich", "dir"],
          ["he", "er", "ihn", "ihm"],
          ["she", "sie", "sie", "ihr"],
          ["it", "es", "es", "ihm"],
          ["we", "wir", "uns", "uns"],
          ["you (plural)", "ihr", "euch", "euch"],
          ["they", "sie", "sie", "ihnen"],
          ["you (formal)", "Sie", "Sie", "Ihnen"]
        ]
      }
    ],
    examples: [
      { de: "Ich liebe dich.", en: "I love you." },
      { de: "Er gibt mir das Buch.", en: "He gives me the book." },
      { de: "Können Sie mir helfen?", en: "Can you help me? (formal)" }
    ],
    note: "Remember: 'Sie' (formal you) is always capitalized, while 'sie' (she/they) is lowercase except at the start of a sentence."
  },
  {
    id: "present",
    name: "Present Tense Verbs",
    description: "Most German verbs follow a regular pattern in the present tense. Remove the -en ending from the infinitive to get the stem, then add the appropriate ending.",
    tables: [
      {
        title: "Regular Conjugation: spielen (to play)",
        headers: ["Pronoun", "Conjugation", "English"],
        rows: [
          ["ich", "spiele", "I play"],
          ["du", "spielst", "you play"],
          ["er/sie/es", "spielt", "he/she/it plays"],
          ["wir", "spielen", "we play"],
          ["ihr", "spielt", "you (pl.) play"],
          ["sie/Sie", "spielen", "they/you (formal) play"]
        ]
      },
      {
        title: "Irregular: sein (to be)",
        headers: ["Pronoun", "Conjugation", "English"],
        rows: [
          ["ich", "bin", "I am"],
          ["du", "bist", "you are"],
          ["er/sie/es", "ist", "he/she/it is"],
          ["wir", "sind", "we are"],
          ["ihr", "seid", "you (pl.) are"],
          ["sie/Sie", "sind", "they/you (formal) are"]
        ]
      },
      {
        title: "Irregular: haben (to have)",
        headers: ["Pronoun", "Conjugation", "English"],
        rows: [
          ["ich", "habe", "I have"],
          ["du", "hast", "you have"],
          ["er/sie/es", "hat", "he/she/it has"],
          ["wir", "haben", "we have"],
          ["ihr", "habt", "you (pl.) have"],
          ["sie/Sie", "haben", "they/you (formal) have"]
        ]
      }
    ],
    examples: [
      { de: "Ich spiele Fußball.", en: "I play football." },
      { de: "Du bist sehr nett.", en: "You are very nice." },
      { de: "Sie hat zwei Katzen.", en: "She has two cats." }
    ],
    note: "Sein and haben are the most important verbs in German — memorize them first! They're also used as auxiliary verbs for past tenses."
  },
  {
    id: "sentence",
    name: "Sentence Structure",
    description: "German word order follows specific rules. In main clauses, the verb is always in the second position. In questions, the verb comes first. In subordinate clauses, the verb goes to the end.",
    tables: [
      {
        title: "Word Order Rules",
        headers: ["Type", "Structure", "Example"],
        rows: [
          ["Statement", "Subject + Verb + Object", "Ich trinke Kaffee."],
          ["Question (yes/no)", "Verb + Subject + Object?", "Trinkst du Kaffee?"],
          ["Question (W-word)", "W-word + Verb + Subject?", "Was trinkst du?"],
          ["Time-first", "Time + Verb + Subject + Object", "Morgen trinke ich Tee."],
          ["Subordinate", "... weil Subject Object Verb", "...weil ich Kaffee trinke."]
        ]
      }
    ],
    examples: [
      { de: "Ich lerne Deutsch.", en: "I learn German. (verb in 2nd position)" },
      { de: "Heute lerne ich Deutsch.", en: "Today I learn German. (time first, verb still 2nd)" },
      { de: "Lernst du Deutsch?", en: "Do you learn German? (yes/no question)" },
      { de: "Ich lerne Deutsch, weil es Spaß macht.", en: "I learn German because it is fun. (subordinate clause)" }
    ],
    note: "The V2 rule (verb second) is the most important rule in German. No matter what comes first in the sentence, the conjugated verb is always in the second position."
  },
  {
    id: "pronunciation",
    name: "Pronunciation Guide",
    description: "German pronunciation is quite regular — once you learn the rules, you can pronounce almost any word. Here are the key sounds that differ from English.",
    tables: [
      {
        title: "Key German Sounds",
        headers: ["Letter(s)", "Sound", "Like English", "Example"],
        rows: [
          ["ä", "eh", "'e' in 'bed'", "Mädchen (girl)"],
          ["ö", "er (rounded lips)", "no exact match", "schön (beautiful)"],
          ["ü", "ew (rounded lips)", "no exact match", "über (over)"],
          ["ch", "soft rasp", "'h' in 'huge'", "ich (I)"],
          ["sch", "sh", "'sh' in 'ship'", "Schule (school)"],
          ["sp/st", "shp/sht", "at start of word", "Straße (street)"],
          ["ei", "eye", "'eye'", "eins (one)"],
          ["ie", "ee", "'ee' in 'see'", "Bier (beer)"],
          ["eu/äu", "oy", "'oy' in 'boy'", "Freund (friend)"],
          ["w", "v", "'v' in 'van'", "Wasser (water)"],
          ["v", "f", "'f' in 'four'", "Vater (father)"],
          ["z", "ts", "'ts' in 'cats'", "zehn (ten)"],
          ["ß", "ss", "'ss' in 'kiss'", "Straße (street)"],
          ["j", "y", "'y' in 'yes'", "ja (yes)"]
        ]
      }
    ],
    examples: [
      { de: "Ich möchte ein Brötchen.", en: "I would like a bread roll. (hear ö and ch)" },
      { de: "Der Zürich-Zug fährt um fünf.", en: "The Zurich train departs at five. (hear ü and ü)" }
    ],
    note: "The umlauts (ä, ö, ü) are unique to German. Practice them by starting with the base vowel (a, o, u) and rounding/fronting your lips. The 'ch' sound after front vowels (i, e, ä, ö, ü) is soft; after back vowels (a, o, u) it's harder, like clearing your throat."
  }
];

// ============================================================
// PHRASES DATA
// ============================================================
const PHRASES_DATA = [
  {
    id: "everyday",
    name: "Everyday",
    phrases: [
      { de: "Wie geht's?", en: "How are you?", pron: "vee gayts", context: "Informal way to ask how someone is." },
      { de: "Sprechen Sie Englisch?", en: "Do you speak English?", pron: "SHPREKH-en zee ENG-lish", context: "Useful when you need help in English." },
      { de: "Ich verstehe nicht.", en: "I don't understand.", pron: "ikh fair-SHTAY-eh nikht", context: "Very helpful phrase for beginners." },
      { de: "Können Sie das wiederholen?", en: "Can you repeat that?", pron: "KUR-nen zee dahs VEE-der-hoh-len", context: "When you didn't catch what was said." },
      { de: "Langsamer, bitte.", en: "Slower, please.", pron: "LAHNG-zah-mer BIT-teh", context: "Ask someone to speak more slowly." },
      { de: "Wie sagt man... auf Deutsch?", en: "How do you say... in German?", pron: "vee zahkt mahn... owf doytsh", context: "Great for learning new words in conversation." },
      { de: "Es tut mir leid.", en: "I'm sorry.", pron: "es toot meer lyte", context: "Expressing apology." },
      { de: "Kein Problem.", en: "No problem.", pron: "kine pro-BLAYM", context: "Casual way to say it's okay." },
    ]
  },
  {
    id: "restaurant",
    name: "At the Restaurant",
    phrases: [
      { de: "Einen Tisch für zwei, bitte.", en: "A table for two, please.", pron: "EYE-nen tish fewr tsvy BIT-teh", context: "Requesting a table at a restaurant." },
      { de: "Die Speisekarte, bitte.", en: "The menu, please.", pron: "dee SHPY-zeh-kar-teh BIT-teh", context: "Asking for the menu." },
      { de: "Ich möchte bestellen.", en: "I would like to order.", pron: "ikh MURKH-teh beh-SHTEL-en", context: "Ready to order." },
      { de: "Was empfehlen Sie?", en: "What do you recommend?", pron: "vahs em-PFAY-len zee", context: "Asking for the waiter's suggestion." },
      { de: "Die Rechnung, bitte.", en: "The check, please.", pron: "dee REKH-noong BIT-teh", context: "Asking for the bill." },
      { de: "Das schmeckt sehr gut!", en: "This tastes very good!", pron: "dahs shmekt zayr goot", context: "Complimenting the food." },
      { de: "Ich bin allergisch gegen...", en: "I am allergic to...", pron: "ikh bin ah-LAIR-gish GAY-gen", context: "Important for food allergies." },
      { de: "Zahlen, bitte.", en: "Pay, please.", pron: "TSAH-len BIT-teh", context: "Another way to ask for the bill." },
    ]
  },
  {
    id: "shopping",
    name: "Shopping",
    phrases: [
      { de: "Was kostet das?", en: "How much does this cost?", pron: "vahs KOS-tet dahs", context: "Asking the price of something." },
      { de: "Ich schaue mich nur um.", en: "I'm just looking.", pron: "ikh SHOW-eh mikh noor oom", context: "When you don't need help yet." },
      { de: "Haben Sie das in einer anderen Größe?", en: "Do you have this in another size?", pron: "HAH-ben zee dahs in EYE-ner AN-der-en GRUR-seh", context: "Asking for a different size." },
      { de: "Kann ich mit Karte zahlen?", en: "Can I pay by card?", pron: "kahn ikh mit KAR-teh TSAH-len", context: "Asking about card payment." },
      { de: "Das ist zu teuer.", en: "That is too expensive.", pron: "dahs ist tsoo TOY-er", context: "When the price is too high." },
      { de: "Ich nehme das.", en: "I'll take it.", pron: "ikh NAY-meh dahs", context: "Deciding to buy something." },
    ]
  },
  {
    id: "emergency",
    name: "Emergency",
    phrases: [
      { de: "Hilfe!", en: "Help!", pron: "HIL-feh", context: "Calling for help." },
      { de: "Rufen Sie die Polizei!", en: "Call the police!", pron: "ROO-fen zee dee po-lee-TSYE", context: "Emergency situation." },
      { de: "Ich brauche einen Arzt.", en: "I need a doctor.", pron: "ikh BROW-kheh EYE-nen artst", context: "Medical emergency." },
      { de: "Wo ist das Krankenhaus?", en: "Where is the hospital?", pron: "voh ist dahs KRAN-ken-hows", context: "Finding the hospital." },
      { de: "Ich habe mich verlaufen.", en: "I am lost.", pron: "ikh HAH-beh mikh fair-LOW-fen", context: "When you don't know where you are." },
      { de: "Ich brauche Hilfe.", en: "I need help.", pron: "ikh BROW-kheh HIL-feh", context: "General request for help." },
    ]
  }
];

// ============================================================
// PROGRESS TRACKING (localStorage)
// ============================================================
const STORAGE_KEY = "deutschLernen_progress";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { mastered: [], quizScores: [] };
  } catch {
    return { mastered: [], quizScores: [] };
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* ignore */ }
}

function toggleMastered(wordKey) {
  const progress = loadProgress();
  const idx = progress.mastered.indexOf(wordKey);
  if (idx >= 0) {
    progress.mastered.splice(idx, 1);
  } else {
    progress.mastered.push(wordKey);
  }
  saveProgress(progress);
  updateProgressUI();
  return idx < 0; // returns true if now mastered
}

function isMastered(wordKey) {
  return loadProgress().mastered.includes(wordKey);
}

function getMasteredCount() {
  return loadProgress().mastered.length;
}

function getTotalWords() {
  let count = 0;
  for (const cat of VOCAB_DATA.categories) {
    count += cat.words.length;
  }
  return count;
}

function updateProgressUI() {
  const total = getTotalWords();
  const mastered = getMasteredCount();
  const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;

  const fill = document.getElementById("nav-progress-fill");
  const pctEl = document.getElementById("nav-progress-pct");
  const statMastered = document.getElementById("stat-mastered");

  if (fill) fill.style.width = pct + "%";
  if (pctEl) pctEl.textContent = pct + "%";
  if (statMastered) statMastered.textContent = mastered;
}

// ============================================================
// SPEECH SYNTHESIS — Text-to-Speech for German pronunciation
// ============================================================
let germanVoice = null;
let voicesReady = false;

function loadGermanVoice() {
  const voices = speechSynthesis.getVoices();
  // Prefer a native German voice
  germanVoice = voices.find(v => v.lang === "de-DE" && v.localService) ||
                voices.find(v => v.lang === "de-DE") ||
                voices.find(v => v.lang.startsWith("de")) ||
                null;
  voicesReady = voices.length > 0;
}

// Voices load asynchronously in some browsers
if (typeof speechSynthesis !== "undefined") {
  speechSynthesis.onvoiceschanged = loadGermanVoice;
  loadGermanVoice();
}

/**
 * Speak a German text using the browser's Speech Synthesis API.
 * @param {string} text - The German text to speak
 * @param {number} rate - Speech rate (0.5 = slow, 1 = normal)
 */
function speakGerman(text, rate = 0.85) {
  if (typeof speechSynthesis === "undefined") {
    alert("Sorry, your browser does not support text-to-speech.");
    return;
  }
  // Cancel any ongoing speech
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = rate;
  utterance.pitch = 1;

  if (germanVoice) {
    utterance.voice = germanVoice;
  }

  speechSynthesis.speak(utterance);
}

/** Returns the HTML for a small speaker button */
function speakBtnHTML(text, extraClass = "", size = "") {
  const sizeClass = size === "lg" ? " speak-btn-lg" : "";
  return `<button class="speak-btn${sizeClass} ${extraClass}" data-speak="${esc(text)}" title="Listen to pronunciation" aria-label="Listen to pronunciation">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    </svg>
  </button>`;
}

/** Attach click handlers to all .speak-btn elements within a container */
function attachSpeakButtons(container) {
  container.querySelectorAll(".speak-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const text = btn.dataset.speak;
      if (text) {
        // Visual feedback
        btn.classList.add("speaking");
        speakGerman(text);
        setTimeout(() => btn.classList.remove("speaking"), 1200);
      }
    });
  });
}

// ============================================================
// HELPERS
// ============================================================
function esc(s) {
  if (!s) return "";
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function wordKey(catId, wordDe) {
  return catId + "::" + wordDe;
}

function getAllWords() {
  const words = [];
  for (const cat of VOCAB_DATA.categories) {
    for (const w of cat.words) {
      words.push({ ...w, catId: cat.id, catName: cat.name, catColor: cat.color });
    }
  }
  return words;
}

// ============================================================
// RENDER: Hero Stats
// ============================================================
function renderHeroStats() {
  const statWords = document.getElementById("stat-words");
  const statLessons = document.getElementById("stat-lessons");
  if (statWords) statWords.textContent = getTotalWords();
  if (statLessons) statLessons.textContent = VOCAB_DATA.categories.length;
  updateProgressUI();
}

// ============================================================
// RENDER: Lessons
// ============================================================
let activeLessonFilter = "all";

function renderCategoryPills() {
  const container = document.getElementById("category-pills");
  if (!container) return;
  const pills = [{ id: "all", name: "All" }, ...VOCAB_DATA.categories.map(c => ({ id: c.id, name: c.name }))];
  container.innerHTML = pills.map(p =>
    `<button class="cat-pill${activeLessonFilter === p.id ? " active" : ""}" data-cat="${esc(p.id)}">${esc(p.name)}</button>`
  ).join("");
  container.querySelectorAll(".cat-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeLessonFilter = btn.dataset.cat;
      renderCategoryPills();
      renderLessonGrid();
    });
  });
}

function renderLessonGrid() {
  const grid = document.getElementById("lesson-grid");
  if (!grid) return;
  const cats = activeLessonFilter === "all"
    ? VOCAB_DATA.categories
    : VOCAB_DATA.categories.filter(c => c.id === activeLessonFilter);

  grid.innerHTML = cats.map(cat => {
    const mastered = cat.words.filter(w => isMastered(wordKey(cat.id, w.de))).length;
    const pct = Math.round((mastered / cat.words.length) * 100);
    const preview = cat.words.slice(0, 5);
    return `
      <div class="lesson-card" data-cat-id="${esc(cat.id)}">
        <div class="lesson-card-header">
          <span class="lesson-card-cat" data-color="${cat.color}">${esc(cat.name)}</span>
          <h3 class="lesson-card-title">${esc(cat.name)}</h3>
          <span class="lesson-card-count">${cat.words.length} words &middot; ${mastered} mastered</span>
        </div>
        <div class="lesson-card-body">
          <div class="lesson-card-words">
            ${preview.map(w => `<span class="lesson-word-tag">${esc(w.de)}</span>`).join("")}
            ${cat.words.length > 5 ? `<span class="lesson-word-tag">+${cat.words.length - 5} more</span>` : ""}
          </div>
        </div>
        <div class="lesson-card-progress"><div class="lesson-card-progress-fill" style="width:${pct}%"></div></div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".lesson-card").forEach(card => {
    card.addEventListener("click", () => openLessonModal(card.dataset.catId));
  });
}

// Lesson Modal
function openLessonModal(catId) {
  const cat = VOCAB_DATA.categories.find(c => c.id === catId);
  if (!cat) return;

  // Create or reuse modal overlay
  let overlay = document.getElementById("lesson-modal");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "lesson-modal";
    overlay.className = "modal-overlay";
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">${esc(cat.name)}</h2>
        <button class="modal-close" id="lesson-modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <table class="word-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Listen</th>
              <th>Pronunciation</th>
              <th>English</th>
              <th>Mastered</th>
            </tr>
          </thead>
          <tbody>
            ${cat.words.map(w => {
              const key = wordKey(cat.id, w.de);
              const m = isMastered(key);
              return `
                <tr>
                  <td>
                    <span class="word-german">${esc(w.de)}</span>
                    ${w.example ? `<br><span style="font-size:.78rem;color:var(--text-3);font-style:italic;">${esc(w.example)}</span>` : ""}
                  </td>
                  <td>${speakBtnHTML(w.de)}</td>
                  <td><span class="word-pron">${esc(w.pron)}</span></td>
                  <td><span class="word-english">${esc(w.en)}</span></td>
                  <td><button class="word-mastered-btn${m ? " mastered" : ""}" data-key="${esc(key)}">${m ? "&#10003;" : ""}</button></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Show
  requestAnimationFrame(() => overlay.classList.add("open"));
  document.body.style.overflow = "hidden";

  // Close handlers
  overlay.querySelector("#lesson-modal-close").addEventListener("click", closeLessonModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLessonModal(); });

  // Speak buttons
  attachSpeakButtons(overlay);

  // Mastered buttons
  overlay.querySelectorAll(".word-mastered-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = btn.dataset.key;
      const nowMastered = toggleMastered(key);
      btn.classList.toggle("mastered", nowMastered);
      btn.innerHTML = nowMastered ? "&#10003;" : "";
      renderLessonGrid(); // Update progress on cards
    });
  });
}

function closeLessonModal() {
  const overlay = document.getElementById("lesson-modal");
  if (overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// ============================================================
// RENDER: Flashcards
// ============================================================
let flashcardDeck = [];
let flashcardIndex = 0;

function getFlashcardDeck(catFilter) {
  if (catFilter === "all") return getAllWords();
  const cat = VOCAB_DATA.categories.find(c => c.id === catFilter);
  return cat ? cat.words.map(w => ({ ...w, catId: cat.id, catName: cat.name, catColor: cat.color })) : [];
}

function renderFlashcard() {
  const card = document.getElementById("flashcard");
  const counter = document.getElementById("flashcard-counter");
  const frontWord = document.getElementById("fc-front-word");
  const frontHint = document.getElementById("fc-front-hint");
  const backWord = document.getElementById("fc-back-word");
  const backPron = document.getElementById("fc-back-pron");
  const backExample = document.getElementById("fc-back-example");

  if (!flashcardDeck.length) {
    if (frontWord) frontWord.textContent = "No cards";
    if (counter) counter.textContent = "0 / 0";
    return;
  }

  const w = flashcardDeck[flashcardIndex];
  if (card) card.classList.remove("flipped");
  if (frontWord) frontWord.textContent = w.de;
  if (frontHint) frontHint.textContent = w.catName || "";
  if (backWord) backWord.textContent = w.en;
  if (backPron) backPron.textContent = w.pron ? `[${w.pron}]` : "";
  if (backExample) backExample.textContent = w.example || "";
  if (counter) counter.textContent = `${flashcardIndex + 1} / ${flashcardDeck.length}`;

  // Update the flashcard listen button
  const fcListenBtn = document.getElementById("fc-listen-btn");
  if (fcListenBtn) fcListenBtn.dataset.speak = w.de;
}

function initFlashcards() {
  // Populate category dropdown
  const sel = document.getElementById("flashcard-category");
  if (sel) {
    sel.innerHTML = `<option value="all">All Categories</option>` +
      VOCAB_DATA.categories.map(c => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("");
    sel.addEventListener("change", () => {
      flashcardDeck = getFlashcardDeck(sel.value);
      flashcardIndex = 0;
      renderFlashcard();
    });
  }

  flashcardDeck = getFlashcardDeck("all");
  flashcardIndex = 0;
  renderFlashcard();

  // Flip
  const card = document.getElementById("flashcard");
  if (card) card.addEventListener("click", () => card.classList.toggle("flipped"));

  // Nav
  document.getElementById("fc-prev")?.addEventListener("click", () => {
    if (flashcardDeck.length === 0) return;
    flashcardIndex = (flashcardIndex - 1 + flashcardDeck.length) % flashcardDeck.length;
    renderFlashcard();
  });
  document.getElementById("fc-next")?.addEventListener("click", () => {
    if (flashcardDeck.length === 0) return;
    flashcardIndex = (flashcardIndex + 1) % flashcardDeck.length;
    renderFlashcard();
  });

  // Shuffle
  document.getElementById("shuffle-btn")?.addEventListener("click", () => {
    flashcardDeck = shuffleArray(flashcardDeck);
    flashcardIndex = 0;
    renderFlashcard();
  });

  // Got it / Still learning
  document.getElementById("fc-got")?.addEventListener("click", () => {
    if (flashcardDeck.length === 0) return;
    const w = flashcardDeck[flashcardIndex];
    if (w.catId) {
      const key = wordKey(w.catId, w.de);
      if (!isMastered(key)) toggleMastered(key);
    }
    // Move to next
    if (flashcardDeck.length > 0) {
      flashcardIndex = (flashcardIndex + 1) % flashcardDeck.length;
    }
    renderFlashcard();
    renderLessonGrid();
  });

  document.getElementById("fc-miss")?.addEventListener("click", () => {
    if (flashcardDeck.length === 0) return;
    flashcardIndex = (flashcardIndex + 1) % flashcardDeck.length;
    renderFlashcard();
  });
}

// ============================================================
// RENDER: Quiz
// ============================================================
let quizState = null;

function initQuiz() {
  // Populate category dropdown
  const sel = document.getElementById("quiz-category");
  if (sel) {
    sel.innerHTML = `<option value="all">All Categories</option>` +
      VOCAB_DATA.categories.map(c => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("");
  }

  document.getElementById("quiz-start")?.addEventListener("click", startQuiz);
  document.getElementById("quiz-next")?.addEventListener("click", nextQuizQuestion);
  document.getElementById("quiz-retry")?.addEventListener("click", () => {
    document.getElementById("quiz-results").style.display = "none";
    document.getElementById("quiz-setup").style.display = "block";
  });
}

function startQuiz() {
  const catSel = document.getElementById("quiz-category");
  const countSel = document.getElementById("quiz-count");
  const dirSel = document.getElementById("quiz-direction");

  const catFilter = catSel ? catSel.value : "all";
  const numQ = countSel ? parseInt(countSel.value) : 10;
  const direction = dirSel ? dirSel.value : "de-en";

  let pool = catFilter === "all"
    ? getAllWords()
    : (VOCAB_DATA.categories.find(c => c.id === catFilter)?.words.map(w => ({ ...w, catId: catFilter })) || []);

  if (pool.length < 4) {
    alert("Not enough words for a quiz. Choose a bigger category.");
    return;
  }

  const questions = shuffleArray(pool).slice(0, Math.min(numQ, pool.length));
  const quizQuestions = questions.map(q => {
    const prompt = direction === "de-en" ? q.de : q.en;
    const answer = direction === "de-en" ? q.en : q.de;

    // Get 3 wrong answers from the pool
    let wrongs = pool.filter(w => (direction === "de-en" ? w.en : w.de) !== answer);
    wrongs = shuffleArray(wrongs).slice(0, 3).map(w => direction === "de-en" ? w.en : w.de);

    const choices = shuffleArray([answer, ...wrongs]);
    return { prompt, answer, choices, word: q };
  });

  quizState = {
    questions: quizQuestions,
    current: 0,
    score: 0,
    answers: []
  };

  document.getElementById("quiz-setup").style.display = "none";
  document.getElementById("quiz-results").style.display = "none";
  const active = document.getElementById("quiz-active");
  if (active) active.style.display = "block";

  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (!quizState) return;
  const q = quizState.questions[quizState.current];
  const total = quizState.questions.length;
  const current = quizState.current + 1;

  const fill = document.getElementById("quiz-progress-fill");
  const numEl = document.getElementById("quiz-question-num");
  const promptEl = document.getElementById("quiz-prompt");
  const choicesEl = document.getElementById("quiz-choices");
  const feedbackEl = document.getElementById("quiz-feedback");
  const nextBtn = document.getElementById("quiz-next");

  if (fill) fill.style.width = ((current - 1) / total * 100) + "%";
  if (numEl) numEl.textContent = `Question ${current} of ${total}`;
  if (promptEl) promptEl.textContent = q.prompt;
  if (feedbackEl) { feedbackEl.textContent = ""; feedbackEl.className = "quiz-feedback"; }
  if (nextBtn) nextBtn.style.display = "none";

  if (choicesEl) {
    choicesEl.innerHTML = q.choices.map(c =>
      `<button class="quiz-choice" data-answer="${esc(c)}">${esc(c)}</button>`
    ).join("");

    choicesEl.querySelectorAll(".quiz-choice").forEach(btn => {
      btn.addEventListener("click", () => handleQuizAnswer(btn.dataset.answer));
    });
  }
}

function handleQuizAnswer(chosen) {
  if (!quizState) return;
  const q = quizState.questions[quizState.current];
  const correct = chosen === q.answer;

  if (correct) quizState.score++;
  quizState.answers.push({ question: q, chosen, correct });

  // Highlight answers
  const choicesEl = document.getElementById("quiz-choices");
  if (choicesEl) {
    choicesEl.querySelectorAll(".quiz-choice").forEach(btn => {
      btn.classList.add("disabled");
      if (btn.dataset.answer === q.answer) btn.classList.add("correct");
      else if (btn.dataset.answer === chosen && !correct) btn.classList.add("wrong");
    });
  }

  // Feedback
  const feedbackEl = document.getElementById("quiz-feedback");
  if (feedbackEl) {
    feedbackEl.className = "quiz-feedback " + (correct ? "correct" : "wrong");
    feedbackEl.textContent = correct
      ? "Correct! Sehr gut!"
      : `Not quite. The answer is: ${q.answer}`;
  }

  // Update progress bar
  const fill = document.getElementById("quiz-progress-fill");
  if (fill) fill.style.width = ((quizState.current + 1) / quizState.questions.length * 100) + "%";

  // Mark mastered if correct
  if (correct && q.word.catId) {
    const key = wordKey(q.word.catId, q.word.de);
    if (!isMastered(key)) {
      toggleMastered(key);
      renderLessonGrid();
    }
  }

  // Show next button or results
  const nextBtn = document.getElementById("quiz-next");
  if (nextBtn) {
    if (quizState.current < quizState.questions.length - 1) {
      nextBtn.style.display = "inline-flex";
      nextBtn.textContent = "Next Question";
    } else {
      nextBtn.style.display = "inline-flex";
      nextBtn.textContent = "See Results";
    }
  }
}

function nextQuizQuestion() {
  if (!quizState) return;
  quizState.current++;
  if (quizState.current >= quizState.questions.length) {
    showQuizResults();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResults() {
  document.getElementById("quiz-active").style.display = "none";
  const results = document.getElementById("quiz-results");
  if (results) results.style.display = "block";

  const pct = Math.round((quizState.score / quizState.questions.length) * 100);
  const iconEl = document.getElementById("results-icon");
  const titleEl = document.getElementById("results-title");
  const scoreEl = document.getElementById("results-score");
  const breakdownEl = document.getElementById("results-breakdown");

  if (iconEl) {
    if (pct >= 80) iconEl.textContent = "Ausgezeichnet!";
    else if (pct >= 60) iconEl.textContent = "Gut gemacht!";
    else iconEl.textContent = "Weiter lernen!";
    iconEl.style.fontSize = "1.5rem";
    iconEl.style.fontWeight = "700";
    iconEl.style.color = pct >= 60 ? "var(--green)" : "var(--orange)";
  }

  if (titleEl) {
    if (pct >= 80) titleEl.textContent = "Excellent!";
    else if (pct >= 60) titleEl.textContent = "Good job!";
    else titleEl.textContent = "Keep practicing!";
  }

  if (scoreEl) scoreEl.textContent = `You scored ${quizState.score} out of ${quizState.questions.length} (${pct}%)`;

  if (breakdownEl) {
    const wrong = quizState.questions.length - quizState.score;
    breakdownEl.innerHTML = `
      <div class="results-stat">
        <span class="results-stat-num good">${quizState.score}</span>
        <span class="results-stat-label">Correct</span>
      </div>
      <div class="results-stat">
        <span class="results-stat-num bad">${wrong}</span>
        <span class="results-stat-label">Wrong</span>
      </div>
      <div class="results-stat">
        <span class="results-stat-num">${pct}%</span>
        <span class="results-stat-label">Score</span>
      </div>
    `;
  }

  // Save quiz score
  const progress = loadProgress();
  progress.quizScores.push({ score: quizState.score, total: quizState.questions.length, date: new Date().toISOString() });
  saveProgress(progress);
}

// ============================================================
// RENDER: Grammar
// ============================================================
let activeGrammarTab = GRAMMAR_DATA[0].id;

function renderGrammarTabs() {
  const tabs = document.getElementById("grammar-tabs");
  if (!tabs) return;
  tabs.innerHTML = GRAMMAR_DATA.map(g =>
    `<button class="grammar-tab${activeGrammarTab === g.id ? " active" : ""}" data-tab="${esc(g.id)}">${esc(g.name)}</button>`
  ).join("");
  tabs.querySelectorAll(".grammar-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeGrammarTab = btn.dataset.tab;
      renderGrammarTabs();
      renderGrammarContent();
    });
  });
}

function renderGrammarContent() {
  const container = document.getElementById("grammar-content");
  if (!container) return;
  const section = GRAMMAR_DATA.find(g => g.id === activeGrammarTab);
  if (!section) return;

  let html = `
    <h3 class="grammar-section-title">${esc(section.name)}</h3>
    <p class="grammar-section-desc">${esc(section.description)}</p>
  `;

  for (const table of section.tables) {
    html += `<h4 style="font-size:.9rem;font-weight:600;color:var(--text);margin:1.5rem 0 .5rem;">${esc(table.title)}</h4>`;
    html += `<table class="grammar-table"><thead><tr>`;
    for (const h of table.headers) html += `<th>${esc(h)}</th>`;
    html += `</tr></thead><tbody>`;
    for (const row of table.rows) {
      html += `<tr>`;
      for (const cell of row) html += `<td>${esc(cell)}</td>`;
      html += `</tr>`;
    }
    html += `</tbody></table>`;
  }

  if (section.examples.length) {
    html += `<h4 style="font-size:.9rem;font-weight:600;color:var(--text);margin:1.5rem 0 .5rem;">Examples</h4>`;
    for (const ex of section.examples) {
      html += `<div class="grammar-example"><div class="ge-german-row"><div class="ge-german">${esc(ex.de)}</div>${speakBtnHTML(ex.de)}</div><div class="ge-english">${esc(ex.en)}</div></div>`;
    }
  }

  if (section.note) {
    html += `<p class="grammar-note"><strong>Note:</strong> ${esc(section.note)}</p>`;
  }

  container.innerHTML = html;
  attachSpeakButtons(container);
}

// ============================================================
// RENDER: Phrases
// ============================================================
let activePhraseCategory = PHRASES_DATA[0].id;

function renderPhraseCategories() {
  const container = document.getElementById("phrase-categories");
  if (!container) return;
  container.innerHTML = PHRASES_DATA.map(p =>
    `<button class="phrase-cat-btn${activePhraseCategory === p.id ? " active" : ""}" data-cat="${esc(p.id)}">${esc(p.name)}</button>`
  ).join("");
  container.querySelectorAll(".phrase-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activePhraseCategory = btn.dataset.cat;
      renderPhraseCategories();
      renderPhraseList();
    });
  });
}

function renderPhraseList() {
  const container = document.getElementById("phrase-list");
  if (!container) return;
  const cat = PHRASES_DATA.find(p => p.id === activePhraseCategory);
  if (!cat) return;

  container.innerHTML = cat.phrases.map((p, i) => `
    <div class="phrase-card" data-idx="${i}">
      <div class="phrase-top-row">
        <span class="phrase-german">${esc(p.de)}</span>
        ${speakBtnHTML(p.de)}
      </div>
      <span class="phrase-english">${esc(p.en)}</span>
      <span class="phrase-pron">${esc(p.pron)}</span>
      <span class="phrase-context">${esc(p.context)}</span>
    </div>
  `).join("");

  container.querySelectorAll(".phrase-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Don't toggle when clicking speak button
      if (e.target.closest(".speak-btn")) return;
      card.classList.toggle("expanded");
    });
  });
  attachSpeakButtons(container);
}

// ============================================================
// RENDER: Listen & Practice Section
// ============================================================
let listenPracticeCategory = "all";
let listenSpeed = 0.85;
let playAllStopped = false;

function renderListenPractice() {
  const container = document.getElementById("listen-practice-content");
  if (!container) return;

  const words = listenPracticeCategory === "all"
    ? getAllWords()
    : (VOCAB_DATA.categories.find(c => c.id === listenPracticeCategory)?.words.map(w => ({
        ...w,
        catId: listenPracticeCategory,
        catName: VOCAB_DATA.categories.find(c => c.id === listenPracticeCategory)?.name
      })) || []);

  container.innerHTML = `
    <div class="listen-grid">
      ${words.map(w => `
        <div class="listen-card">
          <div class="listen-card-top">
            <span class="listen-card-german">${esc(w.de)}</span>
            <button class="speak-btn speak-btn-lg listen-speak-btn" data-speak="${esc(w.de)}" title="Listen at normal speed" aria-label="Listen">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
            </button>
            <button class="speak-btn speak-btn-slow listen-speak-btn" data-speak="${esc(w.de)}" data-slow="true" title="Listen slowly" aria-label="Listen slowly">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              <span class="slow-label">Slow</span>
            </button>
          </div>
          <span class="listen-card-pron">${esc(w.pron)}</span>
          <span class="listen-card-english">${esc(w.en)}</span>
        </div>
      `).join("")}
    </div>
  `;

  // Attach speak buttons with slow support
  container.querySelectorAll(".listen-speak-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const text = btn.dataset.speak;
      const isSlow = btn.dataset.slow === "true";
      if (text) {
        btn.classList.add("speaking");
        speakGerman(text, isSlow ? 0.5 : 0.85);
        setTimeout(() => btn.classList.remove("speaking"), 1500);
      }
    });
  });
}

function initListenPractice() {
  const sel = document.getElementById("listen-category");
  if (sel) {
    sel.innerHTML = `<option value="all">All Categories</option>` +
      VOCAB_DATA.categories.map(c => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("");
    sel.addEventListener("change", () => {
      listenPracticeCategory = sel.value;
      renderListenPractice();
    });
  }

  // Play All button
  const playAllBtn = document.getElementById("listen-play-all");
  const stopBtn = document.getElementById("listen-stop");

  playAllBtn?.addEventListener("click", () => {
    const words = listenPracticeCategory === "all"
      ? getAllWords()
      : (VOCAB_DATA.categories.find(c => c.id === listenPracticeCategory)?.words || []);
    if (!words.length) return;

    playAllStopped = false;
    if (playAllBtn) playAllBtn.style.display = "none";
    if (stopBtn) stopBtn.style.display = "inline-flex";

    let i = 0;
    function playNext() {
      if (playAllStopped || i >= words.length) {
        // Done or stopped — reset UI
        if (playAllBtn) playAllBtn.style.display = "inline-flex";
        if (stopBtn) stopBtn.style.display = "none";
        document.querySelectorAll(".listen-card").forEach(c => c.classList.remove("active-listen"));
        return;
      }
      speakGerman(words[i].de, 0.75);
      // Highlight the current card
      const cards = document.querySelectorAll(".listen-card");
      cards.forEach((c, idx) => c.classList.toggle("active-listen", idx === i));
      i++;
      // Wait for speech to end before playing next
      const checkDone = setInterval(() => {
        if (playAllStopped) {
          clearInterval(checkDone);
          speechSynthesis.cancel();
          if (playAllBtn) playAllBtn.style.display = "inline-flex";
          if (stopBtn) stopBtn.style.display = "none";
          document.querySelectorAll(".listen-card").forEach(c => c.classList.remove("active-listen"));
          return;
        }
        if (!speechSynthesis.speaking) {
          clearInterval(checkDone);
          setTimeout(playNext, 400);
        }
      }, 100);
    }
    playNext();
  });

  // Stop button
  stopBtn?.addEventListener("click", () => {
    playAllStopped = true;
    speechSynthesis.cancel();
  });

  renderListenPractice();
}

// ============================================================
// NAVIGATION
// ============================================================
function initNavigation() {
  // Smooth scroll and active state
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      // Close mobile menu
      document.getElementById("nav-links")?.classList.remove("open");
    });
  });

  // Scroll spy
  const sections = ["lessons", "flashcards", "quiz", "grammar", "listen", "phrases"];
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 100;
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    }
    links.forEach(l => {
      l.classList.toggle("active", l.dataset.section === current);
    });

    // Navbar shadow
    document.getElementById("navbar")?.classList.toggle("scrolled", window.scrollY > 10);
  });

  // Hamburger
  document.getElementById("hamburger")?.addEventListener("click", () => {
    document.getElementById("nav-links")?.classList.toggle("open");
  });

  // Close modal on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLessonModal();
  });
}

// ============================================================
// INIT
// ============================================================
function init() {
  renderHeroStats();
  renderCategoryPills();
  renderLessonGrid();
  initFlashcards();
  initQuiz();
  renderGrammarTabs();
  renderGrammarContent();
  initListenPractice();
  renderPhraseCategories();
  renderPhraseList();
  initNavigation();

  // Attach speak button on flashcard
  const fcListenBtn = document.getElementById("fc-listen-btn");
  if (fcListenBtn) {
    fcListenBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const text = fcListenBtn.dataset.speak;
      if (text) {
        fcListenBtn.classList.add("speaking");
        speakGerman(text);
        setTimeout(() => fcListenBtn.classList.remove("speaking"), 1200);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
