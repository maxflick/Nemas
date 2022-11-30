import * as React from "react";
import Layout from "../components/layout";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material/";
import Link from "../components/Link";

export default function Terms(props) {
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
            Viktigt för alla som vill använda Nemas tjänster
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom>
            Allmänna villkor
          </Typography>
          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Om våra allmänna villkor
            </Typography>
            <Typography variant="body" gutterBottom>
              Nedan hittar du våra allmänna villkor (”Allmänna Villkor”). De
              handlar i stora drag om att:
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  (a) du förbinder dig att hålla dig uppdaterad om innehållet i
                  de Allmänna Villkoren för all användning av Nemas tjänster;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  (b) med “användare” avses alla användare som köper och som
                  säljer tjänster i tjänsten samt alla former av nyttjande i
                  tjänsten på Webbplatsen och i Appen;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  (c) med “appen” avses alla plattformar och operativsystem där
                  tjänsten laddas ned och används.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  (d) du måste respektera Nemas immateriella rättigheter och
                  inte reproducera Tjänsten någon annanstans;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  (e) du måste ha rätt att lägga upp all information när du
                  skapar annonser samt förfrågningar i Tjänsten och inte
                  inkludera något som kan vara olagligt;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  (f) du ska vara medveten om att Nemas använder sig av
                  tredjepartsleverantören Stripe (www.stripe.com), för att
                  förmedla betalningar mellan Tjänstens användare och att du,
                  för att utföra eller motta betalningar för utförda tjänster i
                  Tjänsten, även måste acceptera Stripes användarvillkor;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  (g) du måste förstå att Nemas har ett begränsat ansvar för
                  Tjänstens tillgänglighet och tillhandahållandet av korrekt
                  information då innehåll i t.ex. en förfrågan genereras av
                  andra användare, samt att ansvaret för genomförandet ligger på
                  dig som användare. Råden du får från andra användare i appen
                  är råd och det är ditt ansvar att säkerställa att ditt
                  genomförande är korrekt; och att
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  (h) du ska vara medveten om att vi behandlar dina
                  personuppgifter i enlighet med vår Personuppgiftspolicy.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="body" gutterBottom>
              Dessa Allmänna Villkor, tillsammans med övriga villkor som finns
              på Nemas webbplats (”Webbplatsen”) och i Nemas applikation för
              mobiltelefoner (”Appen”) samt övriga villkor som Nemas i vissa
              fall tillhandahåller en användare separat, beskriver de villkor
              som är tillämpliga vid användning av Nemas tjänster på Webbplatsen
              och i Appen (gemensamt definierade som ”Tjänsterna” eller enskilt
              som ”Tjänsten”).
              <br />
              <br />
              Genom att använda Tjänsterna på Webbplatsen och i Appen godkänner
              du dessa Allmänna Villkor och förbinder dig att följa dem.
              <br />
              <br />
              Nemas förbehåller sig rätten att ändra dessa Allmänna Villkor från
              tid till annan och kommer då att publicera de ändrade Allmänna
              Villkoren på Webbplatsen och i Appen.
              <br />
              <br />
              De ändrade villkoren blir gällande för nya användare från och med
              det datum de publiceras på Webbplatsen eller i Appen. Redan
              existerande användare blir bundna av de ändrade villkoren 30 dagar
              efter meddelande via e-post eller genom publicering på Webbplatsen
              och i Appen.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Allmänt om tjänsten och registrering
            </Typography>
            <Typography variant="body" gutterBottom>
              Nemas erbjuder användare en möjlighet att nyttja Tjänsten genom
              att registrera sig. För att registrera dig samt använda Tjänsten
              måste du vara minst 18 år gammal. Såväl fysiska som juridiska
              personer kan registrera sig som användare av Tjänsten.
              <br />
              <br />
              Tjänsten tillhandahålls inte för personer som tidigare har brutit
              mot de Allmänna Villkoren, tidigare av Nemas tillhandahållna
              villkor eller tillämplig lag.
              <br />
              <br />
              Nemas förbehåller sig även rätten att stänga av användare som
              använder Tjänsten i strid med de Allmänna Villkoren, tillämplig
              lag eller på ett sätt som annars framstår som oacceptabelt för
              Nemas.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Immateriella rättigheter
            </Typography>
            <Typography variant="body" gutterBottom>
              Allt material i Tjänsten, inklusive Webbplatsens och Appens layout
              omfattas av upphovsrätt, varumärkesrätt, patent eller andra
              immateriella rättigheter. Om inte annat anges är allt material på
              Webbplatsen och i Appen Nemas skyddad egendom.
              <br />
              <br />
              Du får inte kopiera, reproducera, publicera, ladda upp, skicka
              eller distribuera något material eller någon information på
              Webbplatsen eller Appen utan föregående skriftligt tillstånd från
              Nemas.
              <br />
              <br />
              Du bör alltid fråga om lov innan du länkar till Webbplatsen om du
              känner dig osäker om ditt syfte kan inkräkta på Nemas Allmänna
              villkor eftersom en länkning kan innebära att du anses göra
              innehållet tillgängligt för allmänheten.
              <br />
              <br />
              Du får inte indexera innehållet på Webbplatsen eller Appen och
              baserat på detta automatgenerera länkar på din egen hemsida. Inte
              heller får du länka in Webbplatsens material i ett framesystem
              eller Pop-up fönster.
              <br />
              <br />
              Du bör alltid tänka på att det kan finnas andra än Nemas som har
              rättigheter till materialet på Webbplatsen och Appen och dessa då
              också måste ge sitt tillstånd.
              <br />
              <br />
              All otillåten användning av Nemas immateriella rättigheter kan
              medföra ersättningsskyldighet och/eller straffansvar.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Användargenererat innehåll
            </Typography>
            <Typography variant="body" gutterBottom>
              Med användargenererat innehåll avses allt sådant innehåll som en
              användare av Tjänsten skapar eller lägger upp på Webbplatsen eller
              i Appen, som t.ex. bilder, filmer och annonstexter
              (”Användargenererat Innehåll”).
              <br />
              <br />
              Nemas gör inte gällande någon äganderätt till det
              Användargenererade Innehållet.
              <br />
              <br />
              Du garanterar att du innehar nödvändiga rättigheter till det
              Användargenererade Innehållet, antingen genom att du själv har
              skapat detta (vare sig det är exempelvis en bild, videoklipp, text
              och innehåll i förfrågningar eller annonser och marknadsföring).
              <br />
              <br />
              Du garanterar att det Användargenererade Innehållet inte
              innehåller annans upphovsrättsligt skyddade material, logotyp
              eller annan immateriell rättighet som du inte har fått
              rättighetsinnehavarens tillstånd att använda.
              <br />
              <br />
              Du garanterar att du sett till att de personer som kan
              identifieras i det Användargenererade Innehållet (exempelvis i en
              bild eller enbart genom sitt namn) är medvetna om hur materialet
              kommer att användas och att de uttryckligen har godkänt att
              förekomma i det Användargenererade Innehållet.
              <br />
              <br />
              Genom att lägga upp Användargenererat Innehåll vid införandet av
              en förfrågan eller annons, ger du Nemas en oinskränkt rätt att
              fritt förfoga över det Användargenererade Innehållet, genom att
              till exempel bearbeta, formatanpassa, lagra eller kopiera det och
              göra det tillgängligt för allmänheten oavsett mediekanal och att
              vidareupplåta dessa rättigheter till eventuella samarbetspartners.
              <br />
              <br />
              Nemas får även använda det Användargenererade Innehållet i
              marknadsföringssyfte. Nemas rättigheter kvarstår även efter att en
              annons har tagits bort.
              <br />
              <br />
              Du efterger härmed alla krav på ersättning från Nemas för Nemas
              användning av det Användargenererade Innehållet.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Användarens och Rådgivarens ansvar generellt
            </Typography>
            <Typography variant="body" gutterBottom>
              Som användare ansvarar du för att dina registrerade uppgifter är
              korrekta och de överensstämmer med motsvarande registrerade
              företagsuppgifter eller folkbokförda uppgifter.
              <br />
              <br />
              Det är endast du som har registrerat dig som användare som får
              skapa förfrågningar, annonsera och besvara utifrån det
              registrerade kontot. Det är inte tillåtet att låta en annan person
              använda ditt konto i Nemas.
              <br />
              <br />
              Du åtar dig att se till att andra personer inte kan få tillgång
              till ditt konto eller använder Tjänsten i ditt namn. Om du har
              anledning att misstänka att någon obehörig har tillgång till ditt
              konto i Nemas åtar du dig att omedelbart kontakta oss så att vi
              kan spärra ditt konto i avvaktan på utredning.
              <br />
              <br />
              Du som Rådgivare åtar dig att agera med sunt förnuft och om du
              inte är fackman ska du hänvisa till en fackman för tjänster där
              sådant är praxis. Exempelvis vid el- eller VVS-installationer som
              skall utföras av en fackman. Är du som användare osäker ska du
              alltid kolla med en fackman innan ett genomförande.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Skatt och deklaration
            </Typography>
            <Typography variant="body" gutterBottom>
              Du ansvarar själv för att till Skattemyndigheten på ett korrekt
              sätt deklarera den ersättning som du får när du utför uppdrag mot
              betalning som har annonserats i Tjänsten.
              <br />
              <br />
              Användare ansvarar själva för eventuella skattekonsekvenser som
              kan uppkomma i och med användande av Tjänsten, t ex för betalning
              av eventuella skatter och avgifter inklusive sociala avgifter som
              kan komma att utgå.
              <br />
              <br />
              Nemas är endast en mellanhand och tredjepart som tillhandahåller
              en förmedlingsplattform och påtar sig därmed inget ansvar
              därutöver. Det innebär att du som användare behöver själv ta reda
              på om du omfattas av skatter och avgifter, inklusive sociala
              avgifter som kan komma att utgå när du använder Nemas.
              <br />
              <br />
              Om du behöver mer information eller har frågor relaterade till
              skatt så hänvisar vi till din lokala skattemyndighet.
              <br />
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.skatteverket.se/privat/skatter/arbeteochinkomst/inkomster/anlitaenprivatperson.4.d1afd3103d689ac2a80002439.html"
              >
                Här kan du som är annonsör läsa på Skatteverkets hemsida.
              </Link>
              <br />
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.skatteverket.se/privat/skatter/arbeteochinkomst/inkomster/delningsekonomi.4.361dc8c15312eff6fd46d7.html"
              >
                Här kan du som är rådgivare läsa mer på Skatteverkets hemsida.
              </Link>
              <br />
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.skatteverket.se/privat/skatter/arbeteochinkomst/inkomster/delningsekonomi/saljatjansterochgigga/guidedeklarerafortjansterochgig.4.6bef7d451695d90def4495c.html"
              >
                Även här för gig och tjänster.
              </Link>
              <br />
              <br />
              För utdrag på utbetalningar så finner du det under din profil i
              appen och i ditt konto hos vår betalningsleverantör Stripe.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Regler för förfrågningar och annonsering
            </Typography>
            <Typography variant="body" gutterBottom>
              Det är inte tillåtet att annonsera orealistiska eller opassande
              förfrågningar eller erbjudanden. Nemas förbehåller sig rätten att
              ta bort ett erbjudande eller avbryta ett pågående ärende som anses
              falla inom denna kategori.
              <br />
              <br />
              Tjänster som enligt svensk lag är olagliga är inte tillåtna i
              Tjänsten. Missbruk kan komma att polisanmälas.
              <br />
              <br />
              Det är inte tillåtet att som säljande part för utförd tjänst be om
              betalning utanför plattformen, om inte annat godkänts av Nemas,
              eller att be om en högre ersättning än erbjudet i Tjänsten.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Relationen mellan användare och friskrivning samt
              ansvarsbegränsning
            </Typography>
            <Typography variant="body" gutterBottom>
              <strong>Nemas AB ansvarsfriskrivande</strong>
              Nemas är endast en mellanhand och tredjepart som tillhandahåller
              en förmedlingsplattform och påtar sig därmed inget ansvar
              därutöver. Användning av Nemas förmedling av rådgivning och hjälp
              sker därför på användarens egen risk.
              <br />
              <br />
              Nemas ansvarar inte för eventuella skador eller fel som uppstår i
              samband med att en Rådgivare hjälper en Användare. Likaså ansvarar
              Nemas under inga omständigheter för expertrådgivning som helt
              eller delvis misslyckats.
              <br />
              <br />
              Du som Rådgivare åtar dig att agera med sunt förnuft och om du
              inte är fackman ska du hänvisa till en fackman för tjänster där
              sådant är praxis. Exempelvis vid el- eller VVS-installationer som
              skall utföras av en fackman. Är du som användare och beställare av
              råd osäker ska du alltid kolla med en fackman innan ett
              genomförande.
              <br />
              <br />
              Användaren samtycker till och godkänner att Nemas inte kan hållas
              ansvarig för andras användning eller utlämning av uppgifter på
              Nemas app/webbplats. Planering, genomförande och ansvar för
              bokningen beror på inkluderande parter för genomförande där Nemas
              inte kan hållas ansvarig för användares användning av uppgifter på
              Nemas app/webbplats.
              <br />
              <br />
              Bestämmelser i dessa Användarvillkor ska inte begränsa Nemas
              ansvar vid uppsåt eller grov vårdslöshet eller enligt tvingande
              lag.
              <br />
              <br />
              Nemas förbehåller sig rätten att stänga av dig som användare från
              Tjänsten samt att upphöra att tillhandahålla del eller hela
              Tjänsten om det sker en regulatorisk förändring eller genom
              myndighetsbeslut som begränsar Nemas möjligheter att
              tillhandahålla Tjänsten.
              <br />
              <br />
              Nemas tillhandahåller Tjänsten i befintligt skick. Nemas
              förbehåller sig rätten att förändra Tjänsten utan föregående
              meddelande till dig som användare.
              <br />
              <br />
              Nemas kan inte hållas ansvarig för tjänstens tillgänglighet, fel
              eller reducering och/eller uteblivelse av tjänstens
              funktionalitet, däribland virus, tekniska fel och misslyckanden.
              <br />
              <br />
              Nemas kan inte hållas ansvarig för ekonomiska förluster och
              följdskador, däribland förlorad vinst eller förlust av data och
              information.
              <br />
              <br />
              Nemas kan inte inte hållas ansvarig för innehållet på Nemas
              app/webbplats, däribland särskilt text, information, bilder,
              videos eller länkar som läggs in av medlemmar i fritextfält på
              app/webbplatsen.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Betalningar mellan användare
            </Typography>
            <Typography variant="body" gutterBottom>
              Genom Tjänsten har Annonsören och köpande Part möjlighet att
              skicka och ta emot betalningar för annonseringen samt utförda
              tjänster och rådgivning.
              <br />
              <br />
              Betalningstjänster genom vilken skapande av förfrågan och
              leverantör av hjälpande Part kan skicka och ta emot betalningar
              sinsemellan tillhandahålls av leverantören (Säljande part).
              <br />
              <br />
              Genom att godkänna dessa Allmänna Villkor eller genom att
              fortsätta använda Appen och utföra tjänster för vilka du får
              betalt, blir du också bunden av Stripes allmänna villkor, som kan
              ändras från tid till annan av Stripe.
              <br />
              <br />
              Som ett villkor för att möjliggöra betalningstjänster på
              Webbplatsen och i Appen genom Stripes försorg, ska du genom Nemas
              förse Stripe med korrekt information om dig själv.
              <br />
              <br />
              Utbetalningar till den levererande användarens registrerade
              bankkonto aktiveras när tjänsten granskats och godkänts av köparen
              av tjänsten i Tjänsten.
              <br />
              <br />
              Nemas tar en serviceavgift för varje utförd tjänst, vilken kan
              variera i tid och för marknad.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Försäkringsskydd
            </Typography>
            <Typography variant="body" gutterBottom>
              Som företagsanvändare och leverantör av tjänster är du skyldig att
              ha en företagsförsäkring som täcker din verksamhet.
              <br />
              <br />
              Som privatanvändare när du genomför arbete som inte kräver
              fackmannamässig expertis är det din hemförsäkring som gäller.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Avbokning och avgifter
            </Typography>
            <Typography variant="body" gutterBottom>
              För att skapa en bra upplevelse för både Användare och Rådgivare
              finns avbokningsregler och avgifter som gäller för samtliga
              bokningar. I det fall en avbokning med avbokningsavgift genomförs
              går avgiften till den andra parten som kompensation. Avgiften
              varierar beroende på när avbokningen genomförs.
              <br />
              <br />
              Användaren avbokar med &#62; 2h till det digitala mötet startar:
              ingen avbokningsavgift. Hela beloppet återbetalas till användaren.
              <br />
              <br />
              Användaren avbokar med &#60; 2h till digitala mötet startar: 100%
              av samtalskostnaden, precis som att det skulle genomförts. Detta
              för att rådgivaren och experten har avsatt tid för detta och
              avbokas med kort varsel.
              <br />
              <br />
              Vid behov av avbokning måste det ske genom appen. Eventuell
              avbokning utanför Nemas system är ogiltig och debiteras till 100%.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Användande av kampanjkod
            </Typography>
            <Typography variant="body" gutterBottom>
              För att nyttja rabatten relaterad till en kampanjkod skall koden
              senast anges i samband med publicering av en förfrågan eller vid
              besvarande på en förfrågan.
              <br />
              <br />
              En kampanjkod som berättigar en rabatt kan endast göras gällande
              för de annonskategorier där en annonsör betalar för att få hjälp.
              <br />
              <br />
              Om inget annat kommuniceras i samband med kampanjkoden är den
              förknippade rabatten endast giltig vid det första tillfället en
              användare bekräftar och betalar för en genomförd tjänst.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Skadeersättning
            </Typography>
            <Typography variant="body" gutterBottom>
              Du som användare åtar dig att hålla Nemas skadeslöst för det fall
              att någon tredje part ställer krav på ersättning på grund av
              Användargenererat Innehåll eller på grund av att du som användare
              i övrigt har agerat i strid med dessa Allmänna Villkor eller i
              strid med gällande lag eller tredje parts rättighet.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Personuppgifter
            </Typography>
            <Typography variant="body" gutterBottom>
              Nemas behandlar dina personuppgifter i enlighet med Nemas vid var
              tid gällande Personuppgiftspolicy.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Ångerrätt
            </Typography>
            <Typography variant="body" gutterBottom>
              Du är medveten om att det inte föreligger någon ångerrätt om du
              tar del av eller påbörjar utnyttjandet av Tjänsten.
              <br />
              <br />
              Dock begränsar inte detta eventuella ändringar du kan vilja göra
              av de tjänster som efterfrågats och som ska utföras mellan
              användare av Tjänsten.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Allmänt
            </Typography>
            <Typography variant="body" gutterBottom>
              Har du generella frågor kring din upplevelse med Nemas är du
              alltid välkommen att kontakta oss. Vi läser, undersöker,
              utvärderar och svarar på alla inkommande frågor.
              <br />
              <br />
              Krävs det så hör vi av oss till eventuellt andra involverade
              parter, såsom t.ex. en annan Nemas-användare. Du kan närsomhelst
              du vill höra av dig med kompletterande information eller övriga
              frågor rörande ditt ärende.
              <br />
              <br />
            </Typography>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Kontaktuppgifter
            </Typography>
            <Typography variant="body" gutterBottom>
              Nemas AB, Sysslomansgatan 24 112 43 Stockholm, SVERIGE eller
              hej@nemasapp.com.
              <br />
              <br />
              Tillämplig lag och tvistelösning.Svensk lag skall gälla avseende
              dessa Allmänna Villkor och tvister ska lösas i svensk domstol.
              <br />
              <br />
            </Typography>
          </Box>
          <Typography variant="body" gutterBottom>
            <strong>Senast uppdaterat den 14 juni 2021</strong>
          </Typography>
        </Box>
      </Layout>
    </>
  );
}
