import * as React from "react";
import Layout from "../components/layout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material/";

export default function Policy(props) {
  return (
    <>
      <Layout location={props.location}>
        <Box
          sx={{
            my: 4,
            padding: [4, 8],
            backgroundColor: "#fefefe",
            borderRadius: "0 4px 4px 0",
            borderLeft: "8px solid #00dca0",
          }}
        >
          <Typography variant="overline" gutterBottom>
            Gäller från och med 1 februari 2021
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom>
            Integritetspolicy och cookies
          </Typography>
          <Box sx={{ my: 8 }}>
            <Typography variant="body" gutterBottom>
              Nemas's tillgång till dina personuppgifter enligt vad som anges i
              denna integritetspolicy är en förutsättning för din användning av
              Nemas's tjänster i Nemas's applikation eller framöver på Nemas's
              webbplats och är en förutsättning för tillhandahållandet av
              tjänsterna, samt möjliggör Nemas att tillhandahålla ytterligare
              funktioner i syfte att ge dig en förbättrad upplevelse.
              <br />
              <br />
              I denna integritetspolicy hänvisas till Tjänsterna eller Tjänsten.
              <br />
              <br />
              Om du inte kan godta Nemas's behandling av dina personuppgifter
              eller våra allmänna villkor ber vi dig att avstå från att använda
              Tjänsterna.
              <br />
              <br />
              <strong>
                För att sammanfatta så har vi denna integritetspolicy för att:
              </strong>
              <br />
              <br />
              Förklara hur vi samlar in, registrerar, sparar och i övrigt
              behandlar personuppgifter som du lämnar när du använder vår app
              eller webbplats, registrerar dig i appen eller framöver på
              webbplatsen, skapar en förfrågan eller annons, svarar på en
              förfrågan eller annons eller utför andra aktiviteter inom ramen
              för Tjänsterna;
              <br />
              <br />
              Säkerställa att du förstår vilken information som vi samlar in för
              att kunna tillhandahålla dig Tjänsterna, med ditt samtycke eller
              efter en intresseavvägning och förklara hur vi använder
              informationen som du delar med oss för att vi ska kunna bygga en
              bra produkt och ge dig en riktigt bra upplevelse av Tjänsterna;
              <br />
              <br />
              Ansvara för att skydda dina rättigheter och din integritet enligt
              gällande dataskyddslagstiftning och endast behandla
              personuppgifter för de ändamål som beskrivs i denna
              integritetspolicy.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Personuppgiftsansvarig
            </Typography>
            <Typography variant="body" gutterBottom>
              Nemas är personuppgiftsansvarig för företagets behandling av
              personuppgifter.
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Rättslig grund och ändamålen med behandlingen
            </Typography>
            <Typography variant="body" gutterBottom>
              Det finns två huvudkategorier av information som Nemas samlar in
              och behandlar. Informationen i den första kategorin är nödvändig
              för att du ska kunna använda Tjänsten, dvs. för att kunna fullgöra
              avtalet med dig.
              <br />
              <br />
              Information i den andra kategorin är information som gör det
              möjligt för oss att tillhandahålla ytterligare funktioner i syfte
              att ge dig en förbättrad upplevelse.
              <br />
              <br />
              Viss sådan information behandlar vi med stöd av en
              intresseavvägning och viss information samtycker du till att vi
              får behandla.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="body" gutterBottom>
              <strong>Den första kategorin omfattar:</strong>
              <br />
              <br />
              Registreringsuppgifter, såsom för och efternamn, födelsedatum,
              profilbild, kontaktuppgifter (adress, e-postadress och
              telefonnummer) och land, som du anger när du registrerar dig hos
              Nemas samt det anonymiserade kund-ID som genereras när du
              registrerar dig.
              <br />
              <br />
              Icke-specifik plats baserat på den enhet eller mobila enhet (t.ex.
              genom att använda GPS) du använder.
              <br />
              <br />
              Eftersom viss information i Nemas är platsspecifik behöver vi veta
              vilket land du befinner dig i.
              <br />
              <br />
              Det gör det också möjligt för oss att lämna förslag som grundar
              sig på din ungefärliga geografiska position.
              <br />
              <br />
              Den bild/er, video/os och text/er som du specifikt väljer när du
              skapar en förfrågan eller en annons i Nemas.
              <br />
              <br />
              Den adress som du väljer ska anges som faktureringsadress.
              <br />
              <br />
              Tekniska- och sensoruppgifter, som omfattar den typ av webbläsare
              och enhet som du använder, data från pekskärmen och information
              från enhetens accelerometer och gyroskopsensorer.
              <br />
              <br />
              Detta möjliggör för oss att ge dig en optimal upplevelse av vår
              Tjänst.
              <br />
              <br />
              Teknisk data kan innefatta URL-information, cookie-data, din
              IP-adress, de typer av enheter du använder för att få tillgång
              till eller ansluta till Tjänsten, unika enhets-ID, enhetsattribut,
              typ av nätverksanslutning (t.ex. WiFi, 3G, 4G, LTE) och
              leverantör, nätverks- och enhetsprestanda, typ av webbläsare,
              språk, information som möjliggör hantering av digitala
              rättigheter, operativsystem och Nemas-applikationens version.
              Rörelsegenererad eller orienteringsgenererad mobil sensordata
              (t.ex. accelerometer eller gyroskop).
              <br />
              <br />
              Betalningsinformation. När du skapar en förfrågan eller en annons
              möjliggör Nemas-applikationen att din kredit- eller
              betalkortsinformation (t.ex. korttyp, utgångsdatum och vissa
              siffror i ditt kortnummer) och andra finansiella uppgifter samlas
              in och lagras av vår betaltjänstleverantör Stripe eller någon av
              de betaltjänstleverantörer som vi kan komma att samarbeta med.
              <br />
              <br />
              När dina personuppgifter samlas in och lagras av ett företag som
              är självständigt personuppgiftsansvarig gäller det företagets
              integritetspolicy och personuppgiftshantering.
              <br />
              <br />
              Betaltjänstleverantörerna förser oss vanligtvis med viss begränsad
              information om dig, till exempel en unik token som gör att du kan
              göra ytterligare inköp med den information de har lagrat.
              <br />
              <br />
              Om du har genomfört ett uppdrag och ska ta emot en betalning från
              en annan användare, kan betaltjänstleverantören som överför pengar
              till ditt bankkonto behöva samla in och behandla ytterligare
              information, såsom uppgifter om din bank och kontonummer,
              födelsedatum eller personnummer och telefonnummer.
              <br />
              <br />
              Ändamålen med behandlingen är att tillhandahålla och administrera
              Tjänsterna, för att kommunicera med dig för ändamål relaterade
              till Tjänsterna samt för att behandla din betalning och förhindra
              eller upptäcka bedrägerier.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="body" gutterBottom>
              <strong>Den andra kategorin omfattar exempelvis:</strong>
              <br />
              <br />
              Din specifika plats: Vi kan komma att samla in eller använda den
              specifika platsen för din enhet eller mobila enhet (t.ex. genom
              att använda GPS) baserat på ditt samtycke eller i vissa fall
              baserat på Nemas's eller förfrågande och annonserande användares
              berättigade intresse.
              <br />
              <br />
              Denna information gör det möjligt för oss att med ditt samtycke
              t.ex. automatisera inmatningen av en adress när du skapar en
              förfrågan eller annons i Nemas.
              <br />
              <br />
              Informationen gör det också möjligt för oss att med ditt samtycke
              förse dig med funktioner, information, förfrågningar, annonser och
              annat innehåll som påverkas av var du befinner dig och din plats i
              förhållande till andra Nemasanvändare samt att med ditt samtycke
              dela din specifika plats med andra Nemas användare.
              <br />
              <br />
              Om du väljer att dela din specifika platsinformation men sedan
              ångrar dig har du alltid möjlighet att återkalla ditt samtycke
              genom att ändra dina inställningar i din enhets operativsystem.
              <br />
              <br />
              Därutöver kommer Nemas att samla in din specifika plats när du
              genomför uppdrag via Nemas (från att du svarar på en förfrågan
              eller annons och om du accepteras som leverantör av tjänsten till
              att du har utförd det förfrågade uppdraget) samt dela denna
              information i realtid med den användare vars förfrågan eller
              annons du har svarat på.
              <br />
              <br />
              Vår behandling i dessa fall baserat på Nemas's berättigade
              intresse av att upprätthålla säkra Tjänster, att förebygga,
              upptäcka och förhindra bedrägerier och missbruk av Tjänsterna samt
              andra osäkra aktiviteter och för att skydda förfrågande och
              annonserande användare.
              <br />
              <br />
              Specialkampanjer och erbjudanden: Nemas kan utifrån vårt
              berättigade intresse av att ta del av din uppfattning om våra
              Tjänster, att marknadsföra våra Tjänster samt att skapa ett
              mervärde för dig som användare komma att ge dig möjlighet att
              delta i kampanjer såsom utlottningar, tävlingar eller enkäter
              genom Tjänsterna eller via e-post/sms/pushnotiser.
              <br />
              <br />
              Du kan alltid välja att inte delta i sådana specialkampanjer genom
              att ändra dina inställningar i din enhet för mottagande av notiser
              från oss eller genom att kontakt oss på det sätt som anges under
              rubriken ”Bolagsinformation” nedan.
              <br />
              <br />
              Övrig information: Nemas kan efter en intresseavvägning komma att
              behandla information om dina interaktioner med Tjänsten,
              exempelvis interaktioner med dina och andra användares annonser
              samt förfrågningar i samband med dessa, andra Nemasanvändare,
              uppgifter om de sökningar du gör och datum och tidpunkter för dina
              förfrågningar, det användargenererade innehåll som du lägger upp i
              Tjänsten, inklusive meddelanden som du skickar eller tar emot via
              sådana chattfunktioner som kan komma finnas på Tjänsten.
              <br />
              <br />
              Vi kan också komma att samla in viss begränsad information om din
              historik, t.ex. uppgifter om din transaktionshistorik.
              <br />
              <br />
              Vår behandling i dessa fall sker på grund av vårt berättigade
              intresse att förbättra och utveckla våra tjänster och att förstå
              hur du använder dig av våra tjänster.
              <br />
              <br />
              Användningen av sådan information i den andra kategorin
              förutsätter att du har samtyckt till behandlingen eller att vi
              efter en intresseavvägning får behandla dina uppgifter.
              <br />
              <br />
              Har du lämnat ett sådant samtycke kan du när som helst återkalla
              det genom att ändra dina inställningar i din enhets operativsystem
              eller i förekommande fall genom att ändra dina
              användarinställningar i ditt Nemas-konto.
              <br />
              <br />
              Ett återkallande av ditt samtycke påverkar inte den behandling av
              dina personuppgifter som har förekommit innan du återkallar
              samtycket. Om du har några frågor är du välkommen att kontakta
              oss, se ”Bolagsinformation” nedan.
              <br />
              <br />
              Ändamålen med behandlingen är att kunna utvärdera, utveckla och
              förbättra Tjänsterna genom att personanpassa (t.ex. genom att
              tillhandahålla special- eller lokalanpassat innehåll,
              rekommendationer, funktioner, notiser och annonser i eller utanför
              Tjänsterna) och förbättra din upplevelse av Tjänsterna, för att
              kommunicera med dig, för marknadsförings- och reklamsyften eller
              för att kunna genomföra och hantera deltagande i tävlingar eller
              event. Ändamålen är också att öka säkerheten i Tjänsterna samt att
              förebygga, upptäcka och förhindra missbruk av Tjänsterna och andra
              osäkra aktiviteter.Om du är en levererande användare kan vi dela
              din information med den användare vars förfrågan du har svarat på,
              såsom namn och profilbild på dig, din specifika plats, din
              position i realtid under det du utför ett uppdrag.
              <br />
              <br />
              I övrigt kan ytterligare en kategori av personuppgifter, såsom
              namn, kontaktuppgifter (tex adress, e-post och telefonnummer) och
              korrespondens komma att behandlas för att vi ska kunna uppfylla
              våra rättsliga förpliktelser. Det innebär sådan hantering som är
              nödvändig för att vi ska uppfylla våra rättsliga förpliktelser
              enligt lagkrav, domslut eller myndighetsbeslut.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Cookies
            </Typography>
            <Typography variant="body" gutterBottom>
              Nemas kan komma att använda cookies och annan teknik för att samla
              in information. Läs mer i avsnittet Cookiepolicy längre ner.
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Kategorier av mottagare till vilka personuppgifter kan komma att
              lämnas
            </Typography>
            <Typography variant="body" gutterBottom>
              Nemas kan komma att lämna ut personuppgifter till
              tjänsteleverantörer och affärspartners som vi samarbetar med. Vår
              betaltjänstleverantör Stripe sköter betalningar åt oss.
              <br />
              <br />
              För att du ska kunna betala och ta emot betalningar i Tjänsterna
              kommer Stripe eller annan betaltjänstleverantör som vi använder,
              behöva samla in och spara grundläggande information om dig genom
              Tjänsten.
              <br />
              <br />
              Till exempel arbetar vi med leverantörer av analysverktyg som
              hjälper oss att förstå användningen av vår Tjänst och med
              leverantörer för lagring av data.
              <br />
              <br />
              Dessa mottagare får bara behandla dina personuppgifter för ovan
              angivna ändamål och vi vidtar alla rimliga legala, tekniska och
              organisatoriska åtgärder för att säkerställa att dina uppgifter
              hanteras säkert och med en adekvat skyddsnivå vid överföring eller
              delning med sådana leverantörer.
              <br />
              <br />
              Vi kan komma att dela avidentifierad information med våra partners
              som hjälper oss med att marknadsföra Tjänsterna samt med
              annonspartners för att skicka reklammeddelanden om Nemas till dig,
              eller för att visa dig mer skräddarsytt innehåll, inklusive
              relevanta annonser för produkter och tjänster som kan vara av
              intresse för dig, och för att förstå hur användare interagerar med
              förfrågningar och annonser.
              <br />
              <br />
              Om du är en levererande användare kan vi dela din information med
              den användare vars förfrågan du har svarat på, såsom namn och
              profilbild på dig, din specifika plats. Om du är en användare som
              publicerar en förfrågan kan vi med ditt samtycke komma att lämna
              ut information om din specifika plats baserat på din GPS-position
              till andra Nemas användare.
              <br />
              <br />
              Därutöver kan vi komma att lämna ut personuppgifter vid en
              eventuell överlåtelse av hela eller del av vår verksamhet eller
              vid en fusion till den övertagande juridiska personen.
              <br />
              <br />
              Nemas kan även komma att dela dina personuppgifter med vissa
              företag som är självständigt personuppgiftsansvariga, tex statliga
              myndigheter (polisen, skatteverket eller andra myndigheter) om vi
              är skyldiga att göra det enligt lag eller vid misstanke om brott,
              och företag som erbjuder betalningslösningar (t ex kortinlösande
              företag, banker och andra betaltjänsteleverantörer).
              <br />
              <br />
              När dina personuppgifter delas med ett företag som är
              självständigt personuppgiftsansvarig gäller företagets
              integritetspolicy och personuppgiftshantering.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Lagring och gallring av personuppgifter
            </Typography>
            <Typography variant="body" gutterBottom>
              Vissa av dina personuppgifter gallras eller anonymiseras i samband
              med att ditt Nemas-konto avslutas.
              <br />
              <br />
              För det fall Nemas-kontot inte avslutats kan manuell eller
              automatisk gallring ske på grund av inaktivitet under en period om
              24 månader.
              <br />
              <br />
              Information insamlad för att hantera och besvara kommunikation
              från dig gallras eller anonymiseras 12 månader efter det att
              ärendet som kommunikationen rör har avslutats.
              <br />
              <br />
              Information insamlad för att förebygga, utreda och begränsa
              missbruk av tjänsten gallras inom 24 månader efter insamlandet.
              <br />
              <br />
              Dina personuppgifter kan komma att sparas efter de tidsgränser som
              anges ovan om krav på ytterligare lagring finns t.ex. i
              bokföringslagen.
              <br />
              <br />
              För specialkampanjer lagras dina personuppgifter under den tid
              utlottningen, tävlingen eller enkäten pågår.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Överföring till tredje land
            </Typography>
            <Typography variant="body" gutterBottom>
              Nemas kan komma att överföra dina personuppgifter till tredje land
              (dvs. länder utanför EU/EES).
              <br />
              <br />
              Betaltjänstleverantören Stripe har vidtagit lämpliga och passande
              skyddsåtgärder genom sin Privacy-Shield certifiering och
              tillförsäkrar en hög skyddsnivå för dina personuppgifter, se
              https://www.privacyshield.gov/participant?id=a2zt0000000TQOUAA4,
              https://stripe.com/privacy-shield-policy.
              <br />
              <br />
              Dina personuppgifter kan också komma att överföras till tredje
              land för det fall de av Nemas anlitade tjänsteleverantörerna i sin
              tur anlitar underleverantör för utförande av Tjänsterna.
              <br />
              <br />
              Våra tjänsteleverantörer kommer i så fall att säkerställa att
              överföringen sker i enlighet med gällande dataskyddslagstiftning
              och att en tillräcklig skyddsnivå därigenom uppnås.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Rätt till tillgång till personuppgifter, rättelse m.m.
            </Typography>
            <Typography variant="body" gutterBottom>
              Du har rätt att få information om och en kopia av dina
              personuppgifter som behandlas av Nemas.
              <br />
              <br />
              Du har även rätt att begära att Nemas rättar personuppgifter, som
              du anser är felaktiga eller ofullständiga, blockerar, begränsar
              eller raderar dina personuppgifter.
              <br />
              <br />
              Du har rätt att få ut dina personuppgifter som behandlas av Nemas
              i ett allmänt maskinläsbart format. Om det är tekniskt möjligt,
              vilket avgörs av Nemas, har du även rätt att få dina
              personuppgifter som behandlas hos Nemas överförda till en annan
              personuppgiftsansvarig, t.ex. om du byter till en annan tjänst som
              liknar Tjänsterna.
              <br />
              <br />
              För att utöva dina rättigheter enligt ovan eller om du har frågor
              kring vår behandling kan du kontakta oss på den adress eller
              e-postadress som anges under rubriken ”Bolagsinformation” nedan.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Rätten att inge klagomål
            </Typography>
            <Typography variant="body" gutterBottom>
              Efter det att Dataskyddsförordningen träder i kraft kan du om du
              anser att Nemas's behandling av dina personuppgifter strider mot
              dataskyddslagstiftningen ge in ett klagomål till Datainspektionen.
              <br />
              <br />
              För mer information se Datainspektionens hemsida
              www.datainspektionen.se.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Ändringar av integritetspolicyn
            </Typography>
            <Typography variant="body" gutterBottom>
              Vi kan vid olika tidpunkter uppdatera och förändra vår
              integritetspolicy. Uppdateringar av policyn publiceras på Tjänsten
              och den senaste versionen av allmänna villkor finns alltid på
              Tjänsten.
              <br />
              <br />
              Innan uppdateringen blir gällande informeras du alltid på Tjänsten
              eller via e-post. Om ändringarna är av väsentlig betydelse kommer
              du att informeras i god tid innan ändringar börjar gälla och vi
              kommer även att förklara innebörden av ändringarna.
              <br />
              <br />
              Om du inte vill fortsätta att använda Tjänsten i enlighet med den
              uppdaterade integritetspolicyn kan du säga upp Tjänsten genom att
              radera ditt konto under inställningar i appen.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Bolagsinformation
            </Typography>
            <Typography variant="body" gutterBottom>
              Personuppgiftsansvarig:
              <br />
              <br />
              Nemas © AB, 559248-8778, Sysslomansgatan 24 112 43 Stockholm,
              SVERIGE. nemas@nemasapp.com.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Cookiepolicy – Nemas AB
            </Typography>
            <Typography variant="body" gutterBottom>
              <strong>Gäller från och med den 1a februari 2021.</strong>
              <br />
              <br />
              Denna cookiepolicy beskriver vilka cookies som Nemas använder och
              vad de används till. Om du motsätter dig användandet av cookies
              kan du välja bort cookies via din webbläsarinställning.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Vad är cookies?
            </Typography>
            <Typography variant="body" gutterBottom>
              Cookies är små textfiler som används av webbläsaren för att ge
              användaren tillgång till olika funktioner på webbplatsen och
              lagras på din dator eller mobila enhet (t.ex. smartphone eller
              läsplatta) när du besöker en webbplats. Cookies hjälper
              webbplatsleverantörer att känna igen din enhet under tiden och
              nästa gång du besöker deras webbplats. Det finns annan liknande
              teknik såsom pixeltaggar (transparenta grafiska bilder placerade
              på en webbsida eller i ett e-postmeddelande, som indikerar att en
              sida eller e-post har visats), s.k. web bugs (liknande
              pixeltaggar) och webblagring, som används i programvara på datorer
              eller mobila enheter. Det finns också teknik såsom mobila
              enhetsidentifierare och SDK-integrationer som hjälper företag att
              känna igen din enhet när du återvänder till en app eller på annat
              sätt använder en tjänst.
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Vilka cookies använder vi?
            </Typography>
            <Typography variant="body" gutterBottom>
              Nemas använder två sorters cookies. Den ena sorten cookies kallas
              sessionscookies. De sparas tillfälligt under ditt besök på
              webbplatsen och lagras på din enhet till dess att du lämnar
              webbplatsen och stänger webbläsaren.
              <br />
              <br />
              Den andra sortens cookies kallas beständiga cookies. De lagras på
              din enhet under en längre tid eller till dess att du själv
              manuellt tar bort den och återanvänds vid ditt nästa besök på
              webbplatsen.
              <br />
              <br />
              Hur länge cookien lagras på din enhet beror på livslängden för den
              specifika cookien.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Hur använder vi cookies?
            </Typography>
            <Typography variant="body" gutterBottom>
              Följande typer av cookies kan komma att användas på Nemas's sidor
              för de ändamål som beskrivs nedan:
              <br />
              <br />
              <strong>Funktionella cookies</strong>
              <br />
              <br />
              Funktionella cookies är nödvändiga för att våra sidor ska fungera
              och vara enkla att använda samt för att bättre kunna anpassa
              sidorna efter dina intressen och behov.
              <br />
              <br />
              Dessa cookies gör att vi kan erbjuda Tjänsterna i enlighet med de
              val som du gör så att de kan tillhandahållas korrekt.
              <br />
              <br />
              När du fortsätter att använda eller återvänder till Tjänsterna
              möjliggör dessa cookies att känna igen och samla viktig
              information om dina val och preferenser.
              <br />
              <br />
              Det gör det möjligt för oss att göra användningen av våra sidor
              mer användarvänliga, t.ex. genom att dina språkinställningar, din
              ungefärliga adress baserat på din IP-adress eller andra lokala
              inställningar och anpassa våra sidor i enlighet med detta.
              <br />
              <br />
              Utan dessa nödvändiga cookies kommer vi inte kunna tillhandahålla
              sidorna eller vissa tjänster och funktioner som du efterfrågar och
              våra sidor kommer inte att fungera så smidigt för dig som vi vill
              att de ska göra.
              <br />
              <br />
            </Typography>
            <TableContainer sx={{ my: 4 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Namn</TableCell>
                    <TableCell>Leverantör</TableCell>
                    <TableCell>Syfte</TableCell>
                    <TableCell>Livslängd</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>userLang</TableCell>
                    <TableCell>nemasapp.com</TableCell>
                    <TableCell>Kommer ihåg användarens valda språk</TableCell>
                    <TableCell>1 år</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="body" gutterBottom>
              <strong>Analyscookies</strong>
              <br />
              <br />
              Analyscookies samlar information om hur du använder webbplatsen
              och gör det möjligt för oss att förbättra Tjänsterna, t.ex. visar
              analyscookies oss vilka sidor som är de mest besökta, hjälper oss
              att registrera vilka eventuella problem som uppstått med sidorna
              samt visar oss om våra sidor är effektiva eller inte.
              <br />
              <br />
              Vi använder dessa cookies för att analysera hur Tjänsterna nås,
              används, eller presterar. Vi använder denna information för att
              underhålla, driva och kontinuerligt förbättra Tjänsterna.
              <br />
              <br />
              Vi använder även analyscookies för att sammanställa anonym,
              aggregerad statistik som gör det möjligt för oss att förstå hur
              användare använder våra sidor och hjälper oss att förbättra våra
              sidors struktur och innehåll. Vi kan inte identifiera dig
              personligen genom den här informationen.
              <br />
              <br />
            </Typography>
            <TableContainer sx={{ my: 4 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Namn</TableCell>
                    <TableCell>Leverantör</TableCell>
                    <TableCell>Syfte</TableCell>
                    <TableCell>Livslängd</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>_ga</TableCell>
                    <TableCell>Nemasapp.com</TableCell>
                    <TableCell>
                      Google Analytics använder denna cookie för att generera
                      statistisk data om hur besökaren använder webbplatsen.
                    </TableCell>
                    <TableCell>2 år</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>_gid</TableCell>
                    <TableCell>Nemasapp.com</TableCell>
                    <TableCell>
                      Google Analytics använder denna cookie för att generera
                      statistisk data om hur besökaren använder webbplatsen.
                    </TableCell>
                    <TableCell>24 timmar</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>_gat</TableCell>
                    <TableCell>Nemasapp.com</TableCell>
                    <TableCell>
                      Används av Google Analytics för att begränsa antalet
                      anrop.
                    </TableCell>
                    <TableCell>Session</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>_hjIncludedInSample</TableCell>
                    <TableCell>Hotjar.com</TableCell>
                    <TableCell>
                      Avgör om användaren ingår i insamlandet av data för en
                      statistisk analys över hur besökare använder webbplatsen.
                    </TableCell>
                    <TableCell>Session</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="body" gutterBottom>
              <strong>Cookietillämpning i annonser</strong>
              <br />
              <br />
              Vi kan komma att arbeta med webbpublicister, annonsnätverk och
              tjänsteleverantörer för att leverera Nemas-annonser på andra
              webbplatser och tjänster.
              <br />
              <br />
              Cookies kan användas för att tillhandahålla dig annonser som kan
              vara relevanta för dig och dina intressen på andra webbplatser och
              tjänster, samt för att reglera de annonser som du får och mäta
              dess effektivitet.
              <br />
              <br />
            </Typography>
            <TableContainer sx={{ my: 4 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Namn</TableCell>
                    <TableCell>Leverantör</TableCell>
                    <TableCell>Syfte</TableCell>
                    <TableCell>Livslängd</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>CONSENT</TableCell>
                    <TableCell>Google.se</TableCell>
                    <TableCell>
                      Google använder denna cookie, baserat på senaste sökningar
                      och interaktioner, för att anpassa annonser på Googles
                      webbplatser.
                    </TableCell>
                    <TableCell>20 år</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>fr</TableCell>
                    <TableCell>Facebook.com</TableCell>
                    <TableCell>
                      Facebook använder denna cookie för att generera statistik
                      över annonskampanjer.
                    </TableCell>
                    <TableCell>3 månader</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>tr</TableCell>
                    <TableCell>Facebook.com</TableCell>
                    <TableCell>
                      Facebook använder denna cookie för att generera statistik
                      över annonskampanjer.
                    </TableCell>
                    <TableCell>Session</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>test_cookie</TableCell>
                    <TableCell>Doubleclick.net</TableCell>
                    <TableCell>
                      Används för att kontrollera om användarens webbläsare
                      stöder cookies.
                    </TableCell>
                    <TableCell>Session</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>IDE</TableCell>
                    <TableCell>Doubleclick.net</TableCell>
                    <TableCell>
                      Används för att personifiera annonser som visas för
                      användare baserat på tidigare besök på vår webbplats.
                    </TableCell>
                    <TableCell>1 år</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="body" gutterBottom>
              <strong>Tredjepartscookies</strong>
              <br />
              <br />
              Vi kan låta våra affärspartners använda cookies i eller utanför
              Tjänsten för samma ändamål som anges ovan, inklusive att samla in
              information om dina online-aktiviteter över tid och mellan olika
              webbplatser.
              <br />
              <br />
              Vi kan också anlita tjänsteleverantörer i syfte att för vår
              räkning använda cookies för de ändamål som anges ovan. Vi använder
              även mobila enhetsidentifierare och annan teknik för de ändamål
              som anges i denna cookiepolicy, t.ex. för att känna igen din enhet
              när du återvänder till Nemas-appen eller på annat sätt använder
              Tjänsten.
              <br />
              <br />
              Vi använder även ett antal leverantörer som kan komma att placera
              cookies på din enhet för vår räkning när du besöker våra sidor för
              att göra det möjligt för leverantörerna att leverera de tjänster
              de tillhandahåller.
              <br />
              <br />
            </Typography>
            <TableContainer sx={{ my: 4 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Namn</TableCell>
                    <TableCell>Leverantör</TableCell>
                    <TableCell>Syfte</TableCell>
                    <TableCell>Livslängd</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1P_JAR</TableCell>
                    <TableCell>Google.se</TableCell>
                    <TableCell>
                      Google använder denna cookie, baserat på senaste sökningar
                      och interaktioner, för att anpassa annonser på Googles
                      webbplatser.
                    </TableCell>
                    <TableCell>1 månad</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>NID</TableCell>
                    <TableCell>Google.se</TableCell>
                    <TableCell>
                      Google Maps använder denna cookie, baserat på senaste
                      sökningar och interaktioner, för att anpassa annonser på
                      Googles webbplatser.
                    </TableCell>
                    <TableCell>6 månader</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Hur kan du hantera cookies?
            </Typography>
            <Typography variant="body" gutterBottom>
              Många webbläsare låter dig hantera inställningar. Trots att de
              flesta webbläsare är förinställda att automatiskt acceptera
              cookies tillåter de flesta webbläsare ändring av inställningarna
              genom att avaktivera cookies eller radera vissa cookies.
              <br />
              <br />
              Observera att om du väljer att ändra dina cookieinställningar kan
              det medföra att Tjänsten försämras eller att alla funktioner inte
              fungerar på avsett sätt.
              <br />
              <br />
              På din mobila enhet kan du också ha en ”Begränsa
              Spårning”-inställning (på iOS-enheter) eller en inställning för
              att ”Välja Bort Intressebaserade Annonser” (på Android) som gör
              att du kan begränsa användningen av information om din användning
              av appar i syfte att visa annonser riktade till dina intressen.
              <br />
              <br />
              Vänligen observera att även om du väljer bort spårning genom att
              använda mekanismerna ovan kan du fortfarande komma att få reklam
              när du använder Tjänsten.
              <br />
              <br />
              Om du använder olika enheter för att visa och besöka sidorna
              (t.ex. din dator, smartphone, läsplatta etc.) behöver du se till
              att varje webbläsare på varje enhet är inställd efter dina
              preferenser avseende cookies.
              <br />
              <br />
            </Typography>
            <Typography variant="h3" component="h3" gutterBottom>
              Kontakta oss
            </Typography>
            <Typography variant="body" gutterBottom>
              För mer information om användningen av cookies och hur man kan
              blockera dem, besök Allaboutcookies.org, Youronlinechoices.eu
              (Europa), eller aboutads.info/choices (USA).
              <br />
              <br />
              Om du har några frågor angående vår cookiepolicy, vänligen
              kontakta oss på Nemas AB, Sysslomansgatan 24 112 43 Stockholm,
              SVERIGE eller hello@nemasapp.com.
              <br />
              <br />
            </Typography>
          </Box>
          <Typography variant="body" gutterBottom>
            <strong>Senast uppdaterat den 1a februari 2021</strong>
          </Typography>
        </Box>
      </Layout>
    </>
  );
}
