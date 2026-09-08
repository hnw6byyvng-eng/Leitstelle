Version 1.5
- NAFO/Nachforderungsbutton im laufenden Einsatz
- gleicher Meldetext plus NAFO-Grund
- NAFO-Protokoll mit Uhrzeit
- Meldetext kopierbar
- reine Übungssimulation

Version 1.6 – Einsatzkarte:
- Neuer Reiter „Karte“
- OpenStreetMap-Kartenansicht
- Adresssuche
- Marker per Tippen setzen und verschieben
- Reverse-Geocoding: Kartenpunkt -> Adresse
- Koordinaten werden im Einsatz gespeichert
- Einsatzort kann direkt aus der Karte in die Notruf-/Einsatzdaten übernommen werden
- Optionaler Zugriff auf den aktuellen iPad-Standort
- Internetverbindung für Karte und Adresssuche erforderlich

Version 2.0:
- Neutrale 112-Notrufabfrage für Rettungsdienst, Feuerwehr, technische Hilfe und Wasserrettung.
- „Was ist passiert?“ enthält medizinischen Notfall, Reanimation, Feuer/Rauch, Verkehrsunfall,
  technische Hilfe, Person/Tier im Wasser, Boot in Notlage und Sonstiges.
- Automatischer Vorschlag aus der Abfrage.
- Neuer Button „Vorschlag alarmieren“: setzt vorgeschlagene Einheiten im Übungssystem auf Status 3
  und protokolliert die Alarmierungszeit. Keine reale Alarmierung.
- Rettungsdienst-Tag/Nacht-Umschaltung nach Gerätezeit: Tag 07:00–19:00.
- Zusätzliche verifizierte Fahrzeug-/OPTA-Daten aus Friesland (Rettungsdienst, Feuerwehren Varel/Jever/
  Bockhorn, THW Jever) plus Nutzerangaben.
- Polizei bleibt bewusst als abstrakte Übungsressource, da keine operative OPTA erfunden wird.

Version 2.1:
- Button „Zusätzliche Rettungsmittel“ im laufenden Einsatz.
- Zusätzliche verfügbare Mittel können zum Alarmvorschlag ergänzt werden.
- Button „Realistisch“ in der Rettungsmittelübersicht erzeugt einen zufälligen plausiblen Statusmix
  bei Feuerwehr- und Rettungsdienstfahrzeugen.
- Christoph 26 als RTH/Luftrettung, Standort Sanderbusch (Sande), 24/7, ergänzt.

Version 2.2:
- Einsatz abschließen: alle dem Einsatz zugeordneten/alarmierten Einsatzmittel werden auf Status 1 gesetzt.
- Status 1 wechselt automatisch nach zufälliger Rückkehrzeit von 2–10 Minuten auf Status 2.
- Damit spätestens nach 10 Minuten „Frei auf Wache“.

Version 2.3 – geografische OPTA-Zuordnung Friesland:
1 = Jever
2 = Varel
3 = Zetel
4 = Sande
5 = Schortens
6 = Wangerland
7 = Bockhorn

Rettungsdienst- und Feuerwehrmittel werden anhand der zweiten Ziffer des numerischen OPTA-Blocks
dem Bereich zugeordnet und in der Mittelübersicht entsprechend 1–7 sortiert.

Version 2.4:
- Geografische Disposition: verfügbare Fahrzeuge werden anhand Einsatzort/Koordinaten nach Nähe priorisiert.
- OPTA-Gebiete 1–7 bleiben Grundlage der Wach-/Ortszuordnung.
- Notrufabfrage enthält ein manuelles Freitextfeld.
- Bei medizinischen Notfällen/Reanimation wird XABCDE vollständig abgefragt:
  X kritische Blutung, A Atemweg, B Atmung, C Kreislauf, D Neurologie/Bewusstsein, E weitere Befunde/Umgebung.
- JavaScript-Syntax vor Ausgabe mit Node geprüft.

Version 2.5:
- Geografische Fahrzeugauswahl korrigiert:
  Bei manueller Ortsangabe wird der Einsatzort automatisch über OpenStreetMap/Nominatim geocodiert.
  Die Fahrzeugauswahl wird anschließend nach Entfernung zum Einsatzort sortiert.
  Damit wird nicht mehr pauschal 81-83-1 gewählt.
- Vor der endgültigen Alarmierung öffnet sich eine eigene Alarmvorbereitung mit frei editierbarem Freitextfeld.
- XABCDE ist vor Alarmierung verpflichtend bei Reanimation und immer dann, wenn eine Person verletzt,
  erkrankt oder unmittelbar gefährdet ist.
- XABCDE wird auch bei Person im Wasser, Verkehrsunfall und Feuer mit Menschengefährdung abgefragt.
- Alarmierung wird blockiert, solange erforderliches XABCDE nicht vollständig ist.
- Notruf-Freitext, XABCDE und Alarmierungs-Freitext werden im Einsatz gespeichert und in den Meldetext übernommen.
- Bestehende lokale Daten aus v2.4 werden beim ersten Start übernommen.
- JavaScript-Syntax geprüft.

Version 2.6:
- Parallele Notrufe/Einsätze: mehrere Einsätze können gleichzeitig offen und alarmiert sein.
- Beim Start eines weiteren Notrufs bleibt der bisherige Einsatz erhalten.
- Einsätze können in der Leitstellenübersicht einzeln geöffnet und abgeschlossen werden.
- Einsatz-abschließen-Funktion neu aufgebaut und auf konkrete Einsatz-ID bezogen.
- Beim Abschluss werden die zugeordneten/alarmierten Mittel auf Status 1 gesetzt.
- Neuer Reiter IVENA als reine Übungssimulation (keine Verbindung zum realen IVENA, keine Echtzeitdaten).
- IVENA-Ziele können hinzugefügt und mit Grün/Gelb/Rot sowie Übungshinweisen gepflegt werden.
- JavaScript-Syntax geprüft.

Version 2.7:
- Notruf-Freitext ans Ende der Abfrage verschoben.
- Reiter „Rettungsmittel“ neu aufgebaut und repariert.
- Status kann in der Rettungsmittelübersicht direkt geändert werden.
- Button „Realistisch“ und „+ Einheit“ bleiben erhalten.
- Sichtbare Versionsanzeige „Version 2.7“ ergänzt.
- JavaScript-Syntax geprüft.

Version 2.8:
- Freitext aus der Notrufabfrage entfernt; Freitext vor Erstalarmierung bleibt.
- „Weitere Rettungsmittel“ als separater Button am Einsatz und in der Alarmvorbereitung.
- Schnellauswahl: RTW, NEF, NKTW, RTH, HLF, LF, RW, DLK, DLRG-Mittel, Polizei.
- Je Fahrzeugtyp wird geografisch das nächste verfügbare Mittel gewählt.
- Vor Erstalarmierung: Mittel wird zum Vorschlag ergänzt.
- Nach Erstalarmierung: zusätzliches Mittel wird sofort Status 3 und dem Einsatz zugeordnet.
- Separate „Nachforderung“ mit Grund/Lageänderung, Wahl des Mittels, Status 3 und NAFO-Meldetext.
- Sichtbare Versionsanzeige v2.8.
- JavaScript-Syntax geprüft.

Version 3.0 – Fahrzeugterminal:
- Pro Rettungsmittel eigener Fahrzeuglink und QR-Code.
- Fahrzeugansicht zeigt nur dem Fahrzeug zugeordnete Einsätze.
- Fahrzeug kann eigene Statusmeldungen senden.
- Live-Synchronisation optional über Firebase Realtime Database.
- Leitstelle überträgt Erstalarmierungen, Zusatzmittel und Nachforderungen.
- Fahrzeugterminal aktualisiert sich automatisch im 2-Sekunden-Takt.
- Leitstelle übernimmt Statusänderungen aus der Cloud.
- QR-Code direkt im Reiter Rettungsmittel.
- JavaScript-Syntax geprüft.

Version 3.0.1:
- QR-Code-Erzeugung repariert und auf qrcodejs umgestellt.
- Fahrzeugmodus wird nun beim Seitenstart korrekt erkannt.
- Fehler behoben, durch den initVehicleMode versehentlich in der Kartenfunktion saß.
- QR-Seite zeigt weiterhin den Fahrzeuglink, falls die QR-Bibliothek nicht geladen werden kann.
- JavaScript-Syntax geprüft.

Version 3.1:
- Cloud-Sync repariert: Statusänderungen (manuell, „Realistisch“, automatische Rückkehr auf Wache)
  werden jetzt zuverlässig an Firebase gepusht.
- Neu: Die Leitstelle pollt Firebase alle 3 Sekunden und übernimmt Statusmeldungen, die vom
  Fahrzeugterminal aus gesendet wurden (vorher nur einseitig Leitstelle -> Fahrzeug).
- Beim Aktivieren der Live-Verbindung wird der komplette Fuhrpark einmalig hochgeladen; Polling
  startet automatisch neu, falls die Verbindung aus einer vorherigen Sitzung noch aktiv war.
- IVENA-Übungsansicht: Leitstellenbereiche als Filter (Wilhelmshaven, Oldenburg, Wittmund, alle
  vorausgewählt) mit passenden Klinik-Einträgen je Bereich. Weiterhin reine Simulation ohne
  Verbindung zum realen IVENA-System.
- Neue Fahrzeuge: RTW 86-83-01 (Wangerland), OrgL/LNA 82-84-01 (Varel), OrgL/LNA 84-84-01 (Sande).
- AAO-Liste ergänzt um Rettungsdienst- und Feuerwehr-Einträge sowie eine MANV-AAO.
- MANV als eigene 112-Einsatzkategorie: löst XABCDE-Pflicht aus, staffelt RTW-Anzahl nach
  Betroffenenzahl und alarmiert zusätzlich NEF, OrgL/LNA, HLF und ELW.
- JavaScript-Syntax geprüft.

Version 3.2:
- App umbenannt in „DLRG JET Rettungsleitstelle“ (Titel, Header, Speicher-Schlüssel; alte
  lokale Daten aus v3.0/v3.0.1/v3.1 werden beim ersten Start automatisch übernommen).
- Reiter „Übungen“ entfernt.
- Die drei zuletzt hinzugefügten, nicht offiziell verifizierten Fahrzeuge (RTW 86-83-01,
  OrgL/LNA Varel, OrgL/LNA Sande) wieder entfernt – erfundene OPTA-Nummern widersprechen dem
  Projektgrundsatz, keine operative OPTA zu erfinden. Reale Fahrzeuge können weiterhin über
  „+ Einheit“ ergänzt werden.
- Status 7 (Patient aufgenommen) und 8 (bedingt verfügbar) sind für Feuerwehr, THW und DLRG
  nicht mehr auswählbar (weder in der Rettungsmittelübersicht noch am Fahrzeugterminal noch
  im „Realistisch“-Zufallsmodus) – diese Status ergeben nur für den Rettungsdienst Sinn.
- Reiter „Rettungsmittel“ jetzt nach Organisation und Standort gruppiert statt als eine große
  Tabelle.
- MANV als eigene Notfallkategorie entfernt. Stattdessen wird automatisch in die MANV-Eskalation
  gewechselt, sobald bei „Wie viele Personen sind betroffen?“ mehr als 3 angegeben werden.
  Dabei entfällt die Einzel-XABCDE-Abfrage (Sichtung statt Einzelbefund) sowie die Abfrage der
  Rückrufnummer.
- Notfallort-Abfrage zeigt jetzt direkt eine Karte mit Adresssuche; der Ort kann auch per
  Kartenklick/Marker gewählt werden, alternativ weiterhin per Texteingabe.
- Eingehender-Notruf-Bildschirm überarbeitet: Fortschrittsanzeige, MANV-Hinweis, und neue
  Seitenleiste „Nächste verfügbare Mittel“ mit Status und Entfernung zum Einsatzort.
- IVENA-Übungsansicht: Kliniken können jetzt einzelne Fachrichtungen mit „Abgemeldet bis“
  markiert werden. Schalter zwischen manueller Pflege (selbst abmelden) und automatischem
  Zufallsmodus („Neu auswürfeln“). Weiterhin reine Simulation ohne Verbindung zum realen
  IVENA-System.
- JavaScript-Syntax geprüft.

Version 3.3:
- Rückrufnummer-Abfrage komplett entfernt (nicht nur bei MANV übersprungen, sondern generell
  nicht mehr Teil der 112-Abfrage).
- Je eine einsatzbereite OrgL/LNA-Einheit für Varel und Sande ergänzt. Bewusst ohne erfundene
  BOS-/OPTA-Nummer benannt ("OrgL/LNA Varel" / "OrgL/LNA Sande"), verified: Nutzerangabe – bei
  Bedarf könnt ihr die echte Kennung über "+ Einheit"/Bearbeiten ergänzen.
- OrgL/LNA-Einheiten können nicht mehr auf Status 6 (Nicht einsatzbereit), 7 (Patient
  aufgenommen) oder 8 (bedingt verfügbar) gesetzt werden – weder in der Rettungsmittelübersicht
  noch am Fahrzeugterminal noch im „Realistisch“-Zufallsmodus.
- JavaScript-Syntax geprüft.

Version 3.4:
- NEF „Rettung Friesland 84/82-03“ (Sande) entfernt.
- RTW „Rettung Friesland 87/83-01“ (Bockhorn) neu ergänzt, ergänzt den bereits vorhandenen
  Tagesdienst-RTW 87/83-02.
- JavaScript-Syntax geprüft.

Version 3.5:
- AAO-Liste für den Rettungsdienst um XABCDE-basierte Einträge erweitert.
- Neue, spezifischere Meldestichworte, die abhängig vom XABCDE-Ergebnis automatisch zum
  Grund-Einsatzstichwort ergänzt werden (unabhängig vom auslösenden Ereignis, sofern XABCDE
  erhoben wurde – also auch bei Wasser-, VU- oder Feuer-Einsätzen mit Personengefährdung):
  RD_X (kritische Blutung), RD_A (Atemweg gefährdet), RD_B (Atemstillstand / Atmung auffällig),
  RD_C (relevante Blutung / Schockzeichen), RD_D (bewusstlos / Krampfanfall / Bewusstsein
  getrübt).
- Bei kritischen Befunden (RD_X, RD_B Atemstillstand, RD_C relevante Blutung) wird automatisch
  zusätzlich ein RTW und/oder NEF zum Alarmvorschlag ergänzt und ein Hinweis zur
  Schockraum-Voranmeldung ins Meldestichwort aufgenommen.
- Bei MANV (>3 Verletzte) entfällt diese Eskalation weiterhin, da dort keine Einzel-XABCDE
  erhoben wird.
- JavaScript-Syntax geprüft.

Version 3.6:
- Nach abgeschlossener Notruf-Abfrage werden die internen Einsatzstichwort-Codes und die
  rohen Antworten (JSON) nicht mehr direkt angezeigt, sondern standardmäßig ausgeblendet.
- Neuer Button „Interne Codes & Rohdaten anzeigen“ blendet sie bei Bedarf (z. B. zur
  Übungsauswertung) wieder ein.
- JavaScript-Syntax geprüft.

Version 3.7:
- Fahrzeugliste wird beim Laden jetzt automatisch mit den aktuellen Standarddaten abgeglichen:
  neu hinzugekommene Standardfahrzeuge (z. B. RTW 87/83-01) werden bei bereits genutzten
  Installationen automatisch nachgezogen, ohne eigene/manuell angelegte Einträge zu verändern.
- Fahrzeuge mit früher ausgelieferter, aber inzwischen zurückgezogener erfundener OPTA-Nummer
  (86/83-01, 82/84-01, 84/84-01, 84/82-03) werden bei bereits laufenden Installationen
  automatisch entfernt.
- Neuer 🗑️-Button pro Fahrzeug in der Rettungsmittelübersicht, damit auch manuell angelegte
  Einträge (über „+ Einheit“, ohne Organisation – erscheinen unter „Sonstige“) selbst wieder
  gelöscht werden können.
- JavaScript-Syntax geprüft.

Version 3.8:
- Neuer Reiter „IVENA-Zuweisungen“: simulierte Patiententransporte von Rettungsmitteln zu
  Kliniken, analog zur echten IVENA-Zuweisungsliste.
- Zuweisbar sind RTW, NEF (als Begleitung eines RTW) und RTH (wahlweise als eigenes
  Transportmittel oder als Notarzt-Begleitung), sofern das jeweilige Fahrzeug in Status 4
  (Am Einsatzort) steht.
- Beim Zuweisen wechseln die beteiligten Fahrzeuge sofort auf Status 7 (Patient aufgenommen)
  und automatisch nach ca. 20 Minuten auf Status 8 (bedingt verfügbar).
- Zuweisungsliste zeigt je Eintrag: OPTA/Fahrzeug(e), Zielklinik, Fachrichtung (farblich
  hinterlegt grün/rot je nachdem, ob die Fachrichtung laut IVENA-Übungsansicht aktuell
  abgemeldet ist), S+/S- (Schockraum), NA+/NA- (mit/ohne Notarzt), Geschlecht/Alter und
  voraussichtliche Eintreffzeit.
- JavaScript-Syntax geprüft.

Version 3.9:
- Fahrzeugterminal (QR-Code am Fahrzeug) kann jetzt für RTW und RTH selbst eine
  IVENA-Zuweisung erstellen, sobald das Fahrzeug in Status 4 (Am Einsatzort) ist. Formular:
  Zielklinik, Fachrichtung, Schockraum, Geschlecht, Alter, Notarzt an Bord, Eintreffzeit.
- Beim Absenden wird das Fahrzeug sofort auf Status 7 gesetzt (danach automatisch nach ca.
  20 Minuten auf Status 8) und die Zuweisung landet direkt in der Firebase-Datenbank.
- Die Leitstelle holt neue, vom Fahrzeugterminal erstellte Zuweisungen automatisch beim
  nächsten Live-Sync (alle 3 Sekunden) ab und zeigt sie im Reiter „IVENA-Zuweisungen“ an
  (inkl. kurzer Benachrichtigung).
- Leitstellen-seitig erstellte Zuweisungen werden umgekehrt ebenfalls in die Cloud
  geschrieben, sodass beide Seiten synchron bleiben.
- JavaScript-Syntax geprüft.

Version 3.9:
- Fahrzeugterminal (RTW/RTH): IVENA-Zuweisungen sind jetzt bestätigt vollständig nutzbar – inkl.
  Live-Abgleich mit der Leitstelle über die Cloud-Verbindung.
- Fahrzeugterminal zeigt jetzt zusätzlich eine kompakte IVENA-Kurzübersicht (Klinik, Übungsstatus,
  aktuell abgemeldete Fachrichtungen), live aus der Cloud – die Besatzung sieht damit direkt, ob
  die vorgesehene Fachrichtung am Ziel frei ist, bevor sie zuweist.
- IVENA-Daten (Status, Abmeldungen) werden bei jeder Änderung in der Leitstelle automatisch in die
  Firebase-Datenbank gespiegelt, damit Fahrzeugterminals stets aktuelle Werte sehen.
- Neuer Button „📢 Lagemeldung (Status 4) senden“ am Fahrzeugterminal, nur sichtbar für
  OrgL/LNA-Fahrzeuge, während sie in Status 4 (Am Einsatzort) stehen und einem Einsatz
  zugeordnet sind. Die eingegebene Rückmeldung erscheint in der Leitstelle (Leitstellenübersicht
  und Notruf-Detailansicht) als kleiner, rot hinterlegter Hinweistext direkt unter dem
  betroffenen Einsatz.
- JavaScript-Syntax geprüft.

Version 3.10:
- Neuer Button „📟 Nachfordern“ am Fahrzeugterminal – für JEDES Fahrzeug sichtbar, sobald es in
  Status 4 (Am Einsatzort) steht und einem Einsatz zugeordnet ist. Freitext-Grund/Bedarf wird als
  kleiner, rot hinterlegter Hinweis „(Nachforderung)“ unter dem betroffenen Einsatz in der
  Leitstelle angezeigt (Leitstellenübersicht + Notruf-Detailansicht).
- OrgL/LNA-Fahrzeuge können jetzt ebenfalls IVENA anmelden, sobald sie in Status 4 stehen. Da
  OrgL/LNA selbst nie Patienten transportiert, wechselt dabei nicht das OrgL/LNA-Fahrzeug auf
  Status 7, sondern optional ein am Fahrzeugterminal wählbares RTW/RTH (das ebenfalls live aus
  der Cloud als „in Status 4“ erkannt wird). Ohne Auswahl eines Transportmittels wird die
  Anmeldung trotzdem an die Leitstelle übermittelt, nur ohne Status-Änderung.
- JavaScript-Syntax geprüft.

Version 3.11:
- OrgL/LNA-Lagemeldung fragt jetzt zusätzlich die Anzahl der Patienten am Einsatzort ab.
  Anhand der alarmierten RTW-Zahl des Einsatzes wird automatisch eine weitere Meldung erzeugt:
  zu wenige RTW → automatische Nachforderungs-Meldung („📟 … Nachforderung“); zu viele RTW →
  automatische Abbestellungs-Meldung („↩️ … Abbestellung“). Beide erscheinen wie gewohnt als
  rot hinterlegter Hinweis unter dem Einsatz in der Leitstelle.
- NEF-Fahrzeuge können jetzt ebenfalls IVENA anmelden, sobald sie in Status 4 stehen – wahlweise
  für sich selbst (NEF transportiert ausnahmsweise selbst, Status 7) oder für ein begleitendes
  RTW/RTH (live aus der Cloud als „in Status 4“ erkannt).
- JavaScript-Syntax geprüft.

Version 3.12:
- Fahrzeugterminal: Alarmton + Vibration bei neu eingehendem Einsatz. Der Ton ist ein
  synthetischer, zweitoniger Wechselton (angelehnt an klassische Meldeempfänger wie den
  Swissphone X35 – kein Audio-Sample, sondern per Web Audio API erzeugt, da Originaltöne
  urheberrechtlich geschützt sind). Button „🔔 Alarmton testen“ aktiviert/entsperrt Ton und
  Vibration einmalig (Browser-Vorgabe: Audio benötigt eine Nutzerinteraktion).
- Fahrzeugterminal: neuer Button „📍 Standort teilen“ überträgt den echten GPS-Standort des
  Handys laufend (alle ca. 5 Sekunden bei Bewegung) an die Leitstelle.
- Leitstelle: Live-GPS-Positionen erscheinen als Marker auf der Einsatzkarte (Symbol je nach
  Organisation) inkl. Fahrzeugname, Typ, Status und Zeitstempel im Popup.
- Rettungsmittelübersicht zeigt ein kleines 📍-Symbol bei Fahrzeugen mit aktuellem Live-GPS
  (jünger als 2 Minuten).
- Geografische Fahrzeugauswahl (Nächste verfügbare Mittel, automatische Disposition) nutzt jetzt
  bevorzugt die echte Live-Position eines Fahrzeugs, falls vorhanden, statt nur den groben
  Wach-/Ortsstandort.
- JavaScript-Syntax geprüft.

Version 3.13:
- Neues Sprechwunsch-Fenster auf der Startseite (Leitstellenübersicht): Fahrzeuge in Status 0
  (Priorisierter Sprechwunsch) oder 5 (Sprechwunsch) werden ganz oben auffällig eingeblendet,
  solange mindestens eines vorliegt.
- In allen Fahrzeug-Übersichten (Startseite, Rettungsmittelübersicht, „Nächste verfügbare
  Mittel“ im Notruf, Kartenmarker) steht jetzt der Fahrzeugtyp (z. B. RTW, NEF) groß oben,
  die OPTA/der Funkrufname klein darunter – vorher war es umgekehrt.
- IVENA: neue Ansicht „🏷️ Nach Fachrichtung“ neben der bisherigen „Nach Klinik“-Ansicht. Zeigt
  je Fachrichtung, welche Kliniken sie real anbieten, grün hinterlegt wenn frei, rot hinterlegt
  wenn aktuell dafür abgemeldet.
- Die real angebotenen Fachrichtungen sind für die 5 hinterlegten Kliniken auf Basis
  veröffentlichter Fachabteilungs-/Qualitätsberichtsdaten vorbelegt (Nordwest-Krankenhaus
  Sanderbusch, Klinikum Wilhelmshaven, Klinikum Oldenburg, Pius-Hospital Oldenburg,
  Kreiskrankenhaus Wittmund) und über den neuen Button 🏷️ pro Klinik frei anpassbar, falls sich
  etwas geändert hat oder ihr weitere Kliniken ergänzt.
- JavaScript-Syntax geprüft.

Version 3.14 – Bugfixes:
- Wichtiger Fix: Bei bereits laufenden Installationen (die IVENA schon vor v3.13 genutzt haben)
  wurden die real hinterlegten Fachrichtungen der Kliniken NICHT übernommen, da die Klinikliste
  schon lokal gespeichert war und die neuen Felder deshalb leer blieben. Wird jetzt beim Laden
  automatisch nachgezogen (Zuordnung über den Kliniknamen), ohne bereits gepflegte Status/
  Hinweise/Abmeldungen zu verändern.
- Gleicher Fehler auch bei der AAO-Liste behoben: neu hinzugekommene Einsatzstichworte
  (Rettungsdienst/Feuerwehr/XABCDE/MANV) wurden bei bereits genutzten Installationen nicht
  automatisch ergänzt. Wird jetzt beim Laden nachgezogen (Zuordnung über den Stichwort-Namen).
- Beide Mechanismen ergänzen künftig auch automatisch neu hinzukommende Standard-Kliniken bzw.
  -Stichworte bei bestehenden Installationen, analog zum bereits vorhandenen Abgleich der
  Fahrzeugliste.
- Vollständige Durchsicht des Codes auf verwaiste/undefinierte Funktionsaufrufe und doppelte
  Funktionsdefinitionen durchgeführt – keine weiteren gefunden.
- JavaScript-Syntax geprüft.

Version 3.15:
- Doppelabfrage in der Notrufabfrage entfernt: „Ist die Person bei Bewusstsein?“ und „Atmet die
  Person normal?“ überschnitten sich inhaltlich mit D (Bewusstsein) und B (Atmung) aus dem
  XABCDE-Schema und wurden für dieselben Ereignisse (Medizinischer Notfall/Reanimation) ohnehin
  zusätzlich zu XABCDE abgefragt.
- Ist XABCDE indiziert, läuft die Abfrage jetzt ausschließlich über XABCDE (X/A/B/C/D/E) statt
  vorher zusätzlich über die separaten Bewusstsein-/Atmung-Fragen.
- Die automatische Reanimations-Erkennung (Eskalation auf RTW+NEF+First-Responder-NKTW auch bei
  ursprünglich anders gewähltem Ereignis) läuft jetzt auf Basis der XABCDE-Antworten B und D
  statt der entfernten Duplikat-Fragen – keine Funktionseinbuße, nur die doppelte Abfrage entfällt.
- AAO-Referenzeinträge „DLRG Wasser 2/3“ auf die tatsächlich erhobenen XABCDE-Felder umgestellt.
- JavaScript-Syntax geprüft.

Version 3.16 – kritischer Absturzfix:
- Ursache für die komplett weiße Seite gefunden und behoben: Die IVENA-Kliniken waren nie
  wirklich Teil des zentralen "defaults"-Objekts, sondern nur als separater Startwert für
  db.ivena hinterlegt. Dadurch war "defaults.ivena" bei jeder Installation, die IVENA schon
  einmal genutzt hatte, "undefined" – der Abgleich der Fachrichtungen aus v3.14 griff dann ins
  Leere und ließ das komplette Skript mit einem JavaScript-Fehler abstürzen, bevor irgendetwas
  gerendert wurde (daher die weiße Seite).
- IVENA-Kliniken jetzt korrekt als festen Bestandteil von "defaults" definiert.
- Den Fix mit einem headless Browser (Playwright) gegen simulierte Altbestände geprüft:
  Seitenaufruf, alle Reiter (Leitstelle, Notruf, Karte, Rettungsmittel, AAO, IVENA,
  IVENA-Zuweisungen) sowie ein kompletter Notruf-Durchlauf laufen jetzt fehlerfrei durch, auch
  mit Daten aus einer alten, unvollständigen Installation.
- Dabei bestätigt: Fachrichtungen, AAO-Einträge und Fahrzeuge werden bei bestehenden
  Installationen jetzt zuverlässig nachgezogen, ohne eigene Anpassungen zu überschreiben.
- JavaScript-Syntax geprüft.

Version 3.17:
- Notrufabfrage um Name, Alter und Geschlecht der betroffenen Person ergänzt – direkt vor
  XABCDE, mit derselben Bedingung wie XABCDE (wird nur gefragt, wenn XABCDE indiziert ist,
  entfällt bei MANV wie XABCDE selbst).
- Patientendaten erscheinen jetzt im Meldetext (z. B. „Patient: Max Mustermann, 34 Jahre, M“).
- Das Formular für IVENA-Zuweisungen füllt Geschlecht und Alter jetzt automatisch aus den bereits
  erhobenen Notruf-Angaben vor, falls vorhanden (weiterhin änderbar).
- Änderung mit einem headless Browser end-to-end getestet: sowohl der Fall „XABCDE indiziert“
  (Fragen erscheinen korrekt vor X-A-B-C-D-E) als auch „nicht indiziert“ (alle drei werden
  korrekt automatisch übersprungen) laufen fehlerfrei.
- JavaScript-Syntax geprüft.

Version 3.17:
- Notrufabfrage fragt jetzt vor XABCDE zusätzlich Name, Alter und Geschlecht der betroffenen
  Person ab (sofern XABCDE indiziert ist).
- Bei mehr als einem Patienten (Anzahl > 1) entfallen diese drei Fragen automatisch – die
  Abfrage springt direkt weiter.
- Bei genau einem Patienten werden Alter und Geschlecht automatisch in die IVENA-Anmeldung
  übernommen (vorbelegt, aber änderbar) – sowohl bei der Zuweisung aus der Leitstelle als auch
  am Fahrzeugterminal (RTW/RTH/NEF/OrgL-LNA).
- Kleinere Korrektur: „Divers“ wurde in der Geschlecht-Vorbelegung bisher fälschlich auf „W“
  abgebildet; wird jetzt nicht mehr automatisch zugeordnet.
- Mit Playwright End-to-End getestet: Einzelpatient-Szenario fragt Name/Alter/Geschlecht ab und
  übernimmt sie korrekt in die Zuweisung; Mehrpatienten-/MANV-Szenario überspringt sie vollständig.
- JavaScript-Syntax geprüft.

Version 3.18:
- Zwei weitere Kliniken in die IVENA-Übungsansicht aufgenommen, mit real recherchierten
  Fachabteilungen (aktuelle Qualitätsberichte/Klinik-Websites):
  - Ammerland-Klinik Westerstede: Chirurgie, Innere Medizin, Neurologie, Kardiologie,
    Gynäkologie/Geburtshilfe, Urologie, HNO, Augenheilkunde, Intensivmedizin.
  - Evangelisches Krankenhaus Oldenburg (EV Oldenburg): Chirurgie, Innere Medizin, Neurologie,
    Gynäkologie/Geburtshilfe, Intensivmedizin, Schockraum (uneingeschränkte
    Schwerverletzten-Zulassung).
  - Neuer Leitstellenbereich „Ammerland“ für die Ammerland-Klinik ergänzt.
  - Beide Kliniken sowie der neue Bereich „Ammerland“ werden bei bereits laufenden
    Installationen automatisch nachgezogen (per Playwright-Test gegen simulierte
    Altinstallation geprüft).
- JavaScript-Syntax geprüft.

Version 3.19 – PWA (installierbare App):
- App ist jetzt als Progressive Web App (PWA) installierbar: eigenes Icon, Start ohne
  Browser-Adressleiste (Vollbild/"Standalone"), eigener Splash-Screen.
- Neue Dateien: manifest.json, sw.js (Service Worker), icon-192.png, icon-512.png. Diese MÜSSEN
  im selben Ordner wie index.html liegen (z. B. gemeinsam ins GitHub-Repo).
- Service Worker cached nur die App-Hülle (HTML/Icons) für einen schnelleren Start. Karte,
  Adresssuche und Live-Verbindung (Firebase) laufen weiterhin ausschließlich live übers Netz,
  damit nie veraltete Einsatz-/Statusdaten angezeigt werden.

INSTALLATION AUF DEM HANDY:
- iPhone (Safari): Seite öffnen -> Teilen-Symbol -> "Zum Home-Bildschirm" -> Hinzufügen.
- Android (Chrome): Seite öffnen -> Menü (⋮) -> "App installieren" bzw. "Zum Startbildschirm
  hinzufügen".
- Danach erscheint ein eigenes Icon auf dem Homescreen; Start erfolgt ohne Browserleiste.
- Voraussetzung: Die Seite muss über HTTPS erreichbar sein (bei GitHub Pages automatisch
  gegeben). Über file:// oder http:// funktioniert die Installation nicht zuverlässig.
- Wichtiger Hinweis bleibt bestehen: Auch als installierte PWA gelten dieselben
  Hintergrund-Einschränkungen wie zuvor beschrieben (v3.12) – Alarmton/Vibration/GPS
  funktionieren nur zuverlässig, solange die App aktiv geöffnet und das Handy eingeschaltet ist.
  Eine PWA kann diese Betriebssystem-Grenzen nicht aufheben, sieht aber deutlich mehr wie eine
  "echte" App aus und lässt sich bequemer wiederfinden/starten.

Version 3.20:
- Neue AAO-Abstufung: Ist das komplette XABCDE unauffällig (X-Nein, A-Frei, B-Normal,
  C-Unauffällig, D-Wach/orientiert, E-leer bzw. sinngemäß „keine Auffälligkeiten“), wird
  automatisch auf einen leichten Krankentransport ohne Sonderrechte herabgestuft:
  Einsatzstichwort „Med. Hilfeleistung leicht (R0)“, alarmiert wird standardmäßig ein NKTW
  (ersatzweise ein RTW, falls kein NKTW verfügbar ist), Sonderrechte/Sondersignal (sr) wird
  auf „nein“ gesetzt.
- Die Abstufung betrifft ausschließlich die rettungsdienstlichen Transportmittel (RTW/NEF).
  Bereits angeforderte Feuerwehr-/Technik-Ressourcen (z. B. HLF/RW bei eingeklemmter, aber
  unauffälliger Person) bleiben unverändert bestehen.
- Neuer AAO-Referenzeintrag „Rettungsdienst – Med. Hilfeleistung leicht (R0, unauffälliges
  XABCDE)“ in der AAO-Übersicht ergänzt.
- Mit Playwright end-to-end getestet: sauberes XABCDE löst die Abstufung korrekt aus; ein
  einzelner auffälliger XABCDE-Befund verhindert sie zuverlässig; bei gleichzeitig
  eingeklemmter Person bleiben HLF/RW erhalten, nur der Rettungsdienst-Teil wird auf NKTW
  herabgestuft.
- JavaScript-Syntax geprüft.

Version 3.21:
- Neues Modul ganz am Anfang der Notrufabfrage: Erste Frage ist jetzt „Über welche Nummer ist
  der Anruf eingegangen?“ mit den Optionen 112 / 116 117 (Ärztlicher Bereitschaftsdienst) /
  110 (Polizeinotruf). Bei 112 läuft die Abfrage wie gewohnt weiter. Bei 116 117 oder 110 endet
  die Abfrage sofort mit dem Hinweis „Weitergeleitet an 110“ bzw. „Weitergeleitet an 116 117“ –
  keine weiteren Fragen, kein Alarmvorschlag.
- Realistische Eintreffzeit-Berechnung ergänzt: Rettungshubschrauber (RTH/Luftrettung) werden
  jetzt mit einer deutlich höheren Reisegeschwindigkeit (ca. 200 km/h statt 60 km/h bei
  Bodenfahrzeugen) kalkuliert und können dadurch trotz größerer Distanz die kürzere
  Eintreffzeit haben. Fließt sowohl in die automatische Fahrzeugauswahl als auch in die
  Anzeige „ca. X min“ bei den nächsten verfügbaren Mitteln ein.
- Polizeifahrzeug aus der eigenen Flotte entfernt (inkl. automatischer Alarmierung bei VU/Feuer
  mit Personengefährdung). Stattdessen neue fiktive Schnittstelle „👮 Polizeileitstelle“:
  erscheint auf der Startseite, sobald mindestens ein Einsatz alarmiert wurde. Einsatz auswählen,
  Anzahl Streifenwagen und optionalen Hinweis eingeben – die Anfrage erscheint als Hinweis-Badge
  am jeweiligen Einsatz.
- Zwei weitere Schnittstellen nach demselben Prinzip: „📠 LST GOL“ und „📠 LST Wittmund“, um bei
  den fiktiven Nachbarleitstellen eine bestimmte Anzahl Rettungsmittel für einen ausgewählten
  Einsatz anzufragen.
- Neues Modul „🚗 Fahrzeuge bearbeiten“ in der Alarmvorbereitung (vor der Erstalarmierung):
  einzelne vorgeschlagene Fahrzeuge gezielt entfernen, und ein beliebiges verfügbares Fahrzeug
  (nicht nur automatisch das nächste des Typs) manuell zum Vorschlag hinzufügen.
- Alle vier Module mit Playwright end-to-end getestet: 112/116117/110-Weiche, Hubschrauber-ETA,
  manuelles Hinzufügen/Entfernen vor Alarmierung, sowie die externe Anfrage-Schnittstelle
  inklusive Anzeige auf der Startseite.
- JavaScript-Syntax geprüft.

Version 3.22:
- Einsatzkarte zeigt jetzt zusätzlich:
  - Wachen-Marker für Rettungsdienst, Feuerwehr, THW und DLRG (ein Symbol je Organisation und
    Standort, Popup zeigt Anzahl und Namen der dort stationierten Fahrzeuge).
  - Krankenhaus-Marker für alle IVENA-Kliniken (Name, Ort, Übungsstatus im Popup).
  - Live-GPS-Position jedes Fahrzeugs, auch ohne externes Handy: Fahrzeuge ohne echte
    GPS-Freigabe werden anhand ihrer Wache bzw. – wenn sie einem Einsatz zugeordnet und
    tatsächlich unterwegs sind (Status 3 „Einsatz übernommen“) – mit einer über die Fahrzeit
    interpolierten, simulierten Position dargestellt (gestrichelter Rand = simuliert, durch-
    gezogen = echtes Live-GPS). Die Geschwindigkeit berücksichtigt dabei den Hubschrauber-
    Speed-Vorteil aus v3.21. Am Einsatzort/mit aufgenommenem Patienten wird das Fahrzeug exakt
    am Einsatzort angezeigt (der Rücktransport ins Krankenhaus wird dabei vereinfachend nicht
    separat simuliert).
  - Fahrzeuge, die ruhig auf der Wache stehen oder außer Dienst sind, werden nicht einzeln
    eingezeichnet, um die Karte nicht zu überladen – die stehen bereits gesammelt im
    jeweiligen Wachen-Marker.
- Koordinaten für Wachen/Kliniken basieren auf den bekannten Orten (Jever, Varel, Zetel, Sande,
  Schortens, Wangerland, Bockhorn, Wilhelmshaven, Oldenburg, Wittmund, Westerstede) auf
  Stadt-/Ortsebene, nicht auf exakter Gebäudeadresse – für den Übungszweck ausreichend, aber
  keine Navigationsgenauigkeit.
- Bug behoben: Ein NKTW im Nachtdienst-Ersatzstatus (Status 6 „Nicht einsatzbereit“) wurde
  fälschlich als „unterwegs“ simuliert; betrifft nur Status 3/4/7.
- Bug behoben: Feuerwehr Hohenkirchen fehlte in der Koordinatentabelle, solange der
  automatische OPTA-Ortsabgleich noch nicht gelaufen war.
- Mit Playwright end-to-end getestet (inkl. eines gemockten Leaflet, da die Sandbox ohne
  Internetzugang lief): Wachen-/Klinik-Marker-Anzahl korrekt, Fahrzeugposition bei Alarmierung,
  bei halber Fahrzeit, nach Ablauf der Fahrzeit und bei „Am Einsatzort“ jeweils exakt geprüft.
- JavaScript-Syntax geprüft.

Version 3.23:
- Simulierte Kartenposition auf den kompletten Fahrzyklus erweitert (vorher endete die
  Simulation am Einsatzort):
  Status 2 = an der Wache (im Wachen-Marker gebündelt, kein Einzelmarker) ·
  Status 3 = auf dem Weg zum Einsatzort (Wache → Einsatzort, zeitbasiert interpoliert) ·
  Status 4 = am Einsatzort ·
  Status 7 = auf dem Weg zur Zielklinik der IVENA-Zuweisung (Einsatzort → Klinik, interpoliert) ·
  Status 8 = an der Zielklinik ·
  Status 1 = auf dem Rückweg zur Heimatwache (von Klinik ODER Einsatzort, je nachdem was
  zuletzt zutraf – interpoliert über die für die Rückkehr vorgesehene Zeitspanne) ·
  Status 2 (danach wieder): an der Wache.
- Neue Klinik-Koordinatenzuordnung (hospitalPoint) und Zuweisungs-Zuordnung
  (findUnitHospitalAssignment) ergänzt, damit Status 7/8/1 wissen, zu welcher Klinik das
  Fahrzeug unterwegs ist bzw. von dort zurückkommt.
- Fahrzeuge, die nie eine erkennbare IVENA-Zuweisung oder Einsatzzuordnung hatten (z. B. manuell
  auf Status 1 gesetzt, „Realistisch“-Zufallsmodus), werden weiterhin nicht animiert – sie
  gelten einfach als an der Wache, um keine unsinnige „Rückfahrt aus dem Nichts“ zu zeigen.
- Vereinfachung bleibt bestehen: Hin- und Rückfahrt nutzen dieselbe Reisegeschwindigkeit wie die
  ETA-Berechnung (inkl. Hubschrauber-Vorteil), es wird keine echte Route über Straßen simuliert,
  nur eine Luftlinien-Interpolation zwischen den bekannten Punkten.
- Mit Playwright end-to-end den kompletten Zyklus 3→4→7→8→1→2 durchgetestet: Position bei
  Status 3 nahe Wache, bei Status 4 exakt am Einsatzort, bei Status 7 nach voller Fahrzeit exakt
  an der Klinik, bei Status 8 exakt an der Klinik, bei Status 1 auf halbem Rückweg exakt
  zwischen Klinik und Wache, nach Ablauf automatisch zurück auf Status 2 ohne Einzelmarker.
- JavaScript-Syntax geprüft.

Version 3.24:
- Automatische Statuswechsel bei "Ankunft" eingebaut:
  - Status 3 -> automatisch Status 4, sobald die geschätzte Fahrzeit zum Einsatzort verstrichen
    ist (Hubschrauber entsprechend schneller).
  - Status 4 -> nach 20 Minuten am Einsatzort automatisch Status 7, aber nur wenn inzwischen
    eine IVENA-Zuweisung zu einer Klinik für dieses Fahrzeug vorliegt; ohne Zuweisung bleibt es
    auf Status 4 stehen.
  - Status 7 -> automatisch Status 8, sobald die geschätzte Fahrzeit vom Einsatzort zur
    zugewiesenen Klinik verstrichen ist (ersetzt die bisherige feste 20-Minuten-Regel für diesen
    Schritt durch eine realistische, entfernungsbasierte Zeit).
  - Status 1 -> Status 2 (Rückkehr auf Wache) nutzt jetzt ebenfalls die geschätzte Fahrzeit von
    der zuletzt bekannten Position (Klinik oder Einsatzort) zurück zur Heimatwache, statt einer
    zufälligen Zeitspanne – sofern ermittelbar, sonst wie bisher eine plausible Zufallszeit.
- WICHTIG: Fahrzeuge, die aktiv über ein externes Handy gesteuert werden (Fahrzeugterminal),
  werden von all diesen Automatiken ausgenommen – die Besatzung muss dort jeden Statuswechsel
  selbst auslösen. Einzige Ausnahme ist die Erstalarmierung auf Status 3, die weiterhin durch
  die Leitstelle erfolgt. Erkannt wird "handygesteuert" daran, dass die Crew mindestens einmal
  über ihr Handy einen Status gesetzt oder eine IVENA-Anmeldung/Zuweisung ausgelöst hat; das
  bleibt für dieses Fahrzeug danach dauerhaft gesetzt.
- NKTW und NEF sind jetzt genau wie RTW/RTH als vollwertiges Transportmittel für
  IVENA-Zuweisungen wählbar (Leitstelle und Fahrzeugterminal). Der Rettungshubschrauber bleibt
  sowohl als eigenständiges Transportmittel als auch als Notarzt-Begleitfahrzeug wählbar.
- Bug behoben: IVENA-Zuweisungen ließen sich nicht dauerhaft löschen, weil das Löschen nur
  lokal passierte und der Cloud-Abgleich sie alle paar Sekunden aus Firebase zurückholte.
  Löschen entfernt den Eintrag jetzt auch aus der Cloud-Datenbank.
- Mit Playwright end-to-end getestet: automatischer Durchlauf 3→4→7→8 für ein normales
  Fahrzeug, während ein als "phoneControlled" markiertes Fahrzeug im selben Einsatz
  unverändert auf Status 3 stehen bleibt; Löschen einer Zuweisung bestätigt dauerhaft entfernt.
- JavaScript-Syntax geprüft.

Version 3.25:
- Standort der DLRG-Wache Varel auf der Karte präzisiert: statt der groben Ortsmitte von Varel
  wird jetzt die tatsächliche Adresse "Am Wasserturm 5, 26316 Varel" verwendet (Koordinate
  anhand des dortigen Wahrzeichens Wasserturm Varel bestimmt, das die Straße "Am Wasserturm"
  unmittelbar umgibt).
- Neuer, wiederverwendbarer Mechanismus (STATION_OVERRIDE) für präzise Einzeladressen einzelner
  Wachen, unabhängig von den bisherigen groben Orts-Koordinaten (AREA_CENTERS). Weitere Wachen
  können bei Bedarf ebenso mit einer genauen Adresse hinterlegt werden.
- Andere Organisationen am Standort Varel (z. B. Rettungsdienst) bleiben bewusst unverändert auf
  der groben Ortsmitte, bis für sie ebenfalls eine genaue Adresse gewünscht wird.
- JavaScript-Syntax geprüft.

Version 3.26:
- Weitere Standorte auf der Karte präzisiert (echte, in OpenStreetMap kartierte Gebäude
  gefunden, keine Schätzung):
  - Rettungswache Sande: 53.508352, 8.008457 – liegt direkt neben dem Sportplatz "TV
    Sanderbusch" (Tennisplatz), ca. 170 m nördlich des Nordwest-Krankenhauses.
  - Nordwest-Krankenhaus Sanderbusch (IVENA-Klinik-Marker): 53.50691, 8.00901.
  - Christoph 26 (RTH): dieselbe Koordinate wie das Nordwest-Krankenhaus, da dort real
    stationiert.
- Neuer HOSPITAL_OVERRIDE-Mechanismus (parallel zu STATION_OVERRIDE) für präzise
  Einzelkoordinaten bestimmter Kliniken, unabhängig von der groben Orts-Koordinate.
- Bug beim Einbau behoben: eine fehlerhafte Code-Zusammenführung hätte die Funktionen
  callDestinationPoint/findUnitCall/findUnitHospitalAssignment zerstört – vor dem Speichern
  bemerkt und korrigiert, Syntax und alle Seiten erneut geprüft.
- JavaScript-Syntax geprüft.

Version 3.27:
- Alle 10 Wachen auf der Karte jetzt mit echten, in der öffentlichen Wachen-Datenbank
  bos-fahrzeuge.info verzeichneten Koordinaten hinterlegt (statt der bisherigen groben
  Ortsmitte). Die dortigen Fahrzeuglisten stimmen exakt mit unseren OPTA-Bezeichnungen
  überein (z. B. "Rettung Friesland 82/83-01", "Florian Friesland 11/48-01"), daher hohe
  Verlässlichkeit der Zuordnung:
  - Feuerwehr Varel – Pelzerstraße 5-7, 26316 Varel
  - Rettungswache Varel – Menckestraße 6 (Gelände St. Johannes-Hospital), 26316 Varel
  - Feuerwehr Bockhorn – Schulstraße 19, 26345 Bockhorn
  - Rettungswache Bockhorn (Friesische Wehde) – Grabsteder Straße 27, 26345 Bockhorn
  - Feuerwehr Jever – Milchstraße 3, 26441 Jever
  - THW Jever – Am Bullhamm 11, 26441 Jever
  - Rettungswache Jever – Wangerländische Straße 40a, 26441 Jever
  - Feuerwehr Wangerland (Hohenkirchen) – Jeversche Straße 16, 26434 Hohenkirchen
  - (bereits zuvor: DLRG Varel, Rettungswache Sande, Christoph 26 am Nordwest-Krankenhaus)
- Damit sind jetzt alle Wachen-Standorte adressgenau statt nur auf Ortsebene.
- JavaScript-Syntax geprüft.

Version 3.28:
- Rettungswache Wangerland existierte bisher gar nicht im Fuhrpark – dabei gibt es sie
  tatsächlich. Recherche in der öffentlichen Wachen-Datenbank bos-fahrzeuge.info bestätigt:
  RTW "Rettung Friesland 86/83-01", Adresse Hohensminde 2, 26434 Wangerland.
- Diese Einheit wieder ergänzt (id 116), diesmal mit "verified: BOS-Fahrzeuge" statt
  Nutzerangabe, da jetzt über eine echte Quelle bestätigt.
- Wichtiger Fund dabei: Genau diese OPTA-Nummer hatte ich in v3.2 fälschlich als "erfunden"
  auf eine Rückzugsliste (RETIRED_UNIT_OPTAS) gesetzt und entfernt – sie war in Wahrheit real.
  Diese Sperre wurde jetzt aufgehoben, sonst wäre die Einheit sofort wieder herausgefiltert
  worden.
- Die beiden Bockhorn-RTW (87/83-01, 87/83-02) ebenfalls auf "verified: BOS-Fahrzeuge"
  hochgestuft, da die exakt gleiche Fahrzeugliste über dieselbe Quelle bestätigt wurde.
- Präzise Koordinate für die Rettungswache Wangerland ergänzt: 53.666102, 7.981689.
- Mit Playwright geprüft: Fahrzeug lädt korrekt bei Neuinstallation, wird bei bestehenden
  Installationen automatisch nachgezogen (Migration), und die Karten-Koordinate löst korrekt auf.
- JavaScript-Syntax geprüft.

Version 3.29:
- Zwei weitere Rettungshubschrauber ergänzt, beide als Typ RTH (können sowohl als eigenständiges
  Transportmittel als auch als Notarzt-Begleitfahrzeug/NEF-Ersatz eingesetzt werden, genau wie
  Christoph 26):
  - Lifeliner 4: niederländischer Rettungshubschrauber (Trauma-/MMT-Helikopter), betrieben von
    ANWB Medical Air Assistance (Kennung PH-DOC, Airbus H135), stationiert auf Groningen Airport
    Eelde (53.118056, 6.575833). Versorgungsgebiet u. a. Groningen, Friesland, Drenthe und
    angrenzendes Norddeutschland.
  - Christoph 6: ADAC-Rettungshubschrauber (Airbus EC135), stationiert am Klinikum Links der
    Weser in Bremen (53.035852, 8.817424, exakter Landeplatz). Seit 2023 neben Christoph 26
    zweiter „Inselhubschrauber" für die ostfriesischen/niedersächsischen Inseln.
- Auf ausdrücklichen Wunsch KEIN SAR-Hubschrauber aus Cuxhaven ergänzt, da sich nicht zweifelsfrei
  klären ließ, welche reale Einheit gemeint war (die Bundeswehr-Marine-SAR-Bereitschaft läuft
  faktisch über die Außenstellen Helgoland/SAR 10 und Warnemünde/SAR 24, nicht direkt über
  Nordholz/Cuxhaven selbst).
- Auf ausdrücklichen Wunsch KEIN "Christoph Europa 4" ergänzt, da recherchierbar kein solcher
  Hubschrauber existiert (nur Christoph Europa 1, 2, 3 und 5 sind real) und stattdessen der
  tatsächlich gemeinte Lifeliner 4 identifiziert wurde.
- Mit Playwright geprüft: beide neuen Hubschrauber laden korrekt, lösen auf ihre exakte
  Koordinate auf, und sind sowohl in der Transportmittel- als auch in der
  NEF-Begleitfahrzeug-Auswahl für IVENA-Zuweisungen aufführbar.
- JavaScript-Syntax geprüft.

Version 3.30:
- Neuer Reiter "🚑 Nachbar LKs": zeigt die Rettungsmittel der Nachbarlandkreise Wittmund, Leer,
  Ammerland und Wesermarsch, gruppiert nach Landkreis, mit manuell steuerbarem Status (Übungsleitung).
  Getrennt von den lokalen Friesland-Fahrzeugen gehalten – erscheinen nirgends in der lokalen
  Alarmierung, AAO oder auf der Karte.
- Fahrzeugbezeichnungen und Wachadressen recherchiert (öffentliche Wachen-Datenbank
  bos-fahrzeuge.info):
  - Wittmund: Rettung Wittmund 80/82-01 (NEF) + 80/83-01 (RTW), Schloßstraße 11, 26409 Wittmund
  - Leer: Rotkreuz Leer 40/82-01 (NEF) + 40/83-01 (RTW), Heisfelder Straße 141, 26789 Leer
  - Ammerland: Rettung Ammerland 15/82-01 (NEF) + 15/83-01 (RTW), An der Hössen 16, 26655 Westerstede
  - Wesermarsch: Rettung Wesermarsch 84/83-01 + 84/83-02 (beide RTW), Albert-Schweitzer-Str. 43,
    26954 Nordenham (ein NEF existiert dort real ebenfalls, aber die genaue OPTA-Nummer war nicht
    zweifelsfrei zu ermitteln, daher bewusst weggelassen statt geraten)
- Reale Zuständigkeit recherchiert und korrekt zugeordnet: Wittmund und Leer laufen über die
  "Kooperative Regionalleitstelle Ostfriesland" (Sitz Wittmund, seit 2014, auch zuständig für
  Aurich), Ammerland und Wesermarsch über die "Großleitstelle Oldenburger Land (GOL)" (zuständig
  auch für Cloppenburg, Oldenburg und Delmenhorst).
- Korrektur: die bisherige externe Schnittstelle "LST Wittmund" gab es real so nicht – Wittmund
  hat keine eigene Leitstelle, sondern ist selbst Sitz der Leitstelle Ostfriesland. Umbenannt in
  "LST Ostfriesland" (Dashboard-Button und im neuen Reiter identisch).
- Aus jedem Landkreis lässt sich direkt für einen offenen, alarmierten Einsatz eine Anfrage an
  die jeweils zuständige Leitstelle stellen (nutzt denselben Anfrage-Dialog wie die bestehenden
  externen Schnittstellen: Einsatz auswählen, Anzahl, optionaler Hinweis).
- Mit Playwright geprüft: Reiter rendert alle vier Landkreise, Statusänderung an einer
  Nachbar-Einheit greift sofort, Anfrage an Ostfriesland wird korrekt im Einsatz vermerkt.
- Beim Einbau versehentlich den Sekundentakt (Status-Automatik) überschrieben – beim
  Pflicht-Syntaxcheck vor dem Speichern bemerkt und sofort wiederhergestellt.
- JavaScript-Syntax geprüft.

Version 3.31:
- Weitere echte Rettungsmittel der Nachbarlandkreise ergänzt (Quelle weiterhin
  bos-fahrzeuge.info): Wittmund jetzt zusätzlich mit Rettungswache Esens (RTW 82/83-01,
  Jeverstraße 28 A), Leer zusätzlich mit zweitem NEF (40/82-02), Ammerland zusätzlich mit
  Rettungswache Rastede (RTW 14/83-01, Raiffeisenstraße 204). Damit stehen jetzt 11 statt 8
  Nachbar-Rettungsmittel zur Verfügung.
- NEU: automatische Empfehlung, wenn kein eigenes freies RTW/NEF innerhalb von 20 km zum
  Einsatzort verfügbar ist. Es erscheint direkt auf der Einsatzkarte ein rot blinkender Button
  „Kein eigenes RTW/NEF <20 km frei – bei LST Ostfriesland/GOL anfragen“, der automatisch den
  Landkreis mit dem nächstgelegenen freien Nachbar-Rettungsmittel ermittelt und die passende
  Leitstelle vorschlägt (Wittmund/Leer → Ostfriesland, Ammerland/Wesermarsch → GOL). Ein Klick
  öffnet den Anfrage-Dialog mit bereits ausgewähltem Einsatz.
  Sobald wieder ein eigenes RTW/NEF in Reichweite frei wird, verschwindet der Button automatisch.
- Alle Fahrzeuge können jetzt auch am Fahrzeugterminal Status 0 (Priorisierter Sprechwunsch)
  drücken – vorher war das dort herausgefiltert, obwohl es leitstellenseitig schon immer für
  alle Fahrzeugtypen erlaubt war.
- Die Sprechwunsch-Übersicht im Dashboard zeigt Status-0-Meldungen (rot blinkend) jetzt immer
  über den normalen Sprechwünschen (Status 5), statt in Erfassungsreihenfolge gemischt.
- Mit Playwright geprüft: Banner erscheint korrekt bei fehlender eigener Abdeckung, empfiehlt
  den nächstgelegenen freien Nachbar-Landkreis, öffnet den Anfrage-Dialog mit vorausgewähltem
  Einsatz, und verschwindet wieder sobald ein eigenes Fahrzeug in Reichweite frei wird. Status-0
  am Fahrzeugterminal und Sprechwunsch-Sortierung ebenfalls bestätigt.
- JavaScript-Syntax geprüft.

Version 3.32:
- Nachbarlandkreis-Anfrage funktioniert jetzt auch OHNE vorherige eigene Alarmierung: bisher
  war das Anfrage-Banner und der Anfrage-Dialog an einen bereits mit eigenem Fahrzeug
  alarmierten Einsatz gekoppelt. Ist von vornherein kein eigenes RTW/NEF <20 km verfügbar,
  erscheint das rot blinkende Banner jetzt bereits während der Notrufaufnahme (sobald der
  Einsatzort bekannt ist) – ganz ohne dass zuerst ein eigenes Fahrzeug ausgewählt/alarmiert
  werden muss. Einsatz kann anschließend ganz normal über "Einsatz abschließen" beendet
  werden.
- Neue echte Rettungswache in der Wesermarsch ergänzt: Rettungswache Schweierfeld
  (offizieller Name, nicht "Schwei" – informell teils so abgekürzt), Betreiber Johanniter
  Ortsverband Stedingen, eröffnet Sommer 2025, löste die alte Wache Ovelgönne-Strückhausen ab.
  Fahrzeug: Akkon Wesermarsch 50/83-01 (RTW), Niedernstraße 9, 26936 Stadland. Damit hat die
  Wesermarsch jetzt 3 statt 2 Rettungsmittel im Reiter "Nachbar LKs".
- Mit Playwright geprüft: Banner erscheint korrekt bereits vor jeder eigenen Alarmierung,
  Anfrage beim Nachbarn wird im Einsatz vermerkt, Einsatz lässt sich danach normal abschließen
  und landet im Log.
- JavaScript-Syntax geprüft.

Version 3.33:
- Die 3 fehlenden DLRG-Ortsgruppen des Landkreises Friesland ergänzt (Quelle: DLRG Bezirk
  Oldenburg-Nord, Stand der Aufgabenverteilung 11.01.2017). Der Landkreis hat insgesamt 5
  Ortsgruppen; 4 davon (inkl. Varel) bilden gemeinsam den "Wasserrettungszug Friesland" mit
  fest zugeteilten Fachaufgaben – die 5. Ortsgruppe Wangerooge (Insel) gehört nicht zum
  Wasserrettungszug und wurde daher nicht mit aufgenommen:
  - Wangerland → Wasserrettungsgruppe: Adler Wangerland 76/78-01 (RTB, IRB Savior) +
    Pelikan Friesland 76/19-01 (geländegängiges Mehrzweckfahrzeug)
  - Schortens-Jever → Einsatztauchergruppe: Pelikan Friesland 75/57-01 (GW-Taucher)
  - Bockhorn-Zetel → Fachtrupp Technik/Logistik + Führungstrupp/Zugtrupp: Pelikan Friesland
    77/57-01 (GW-Wasserrettung, Mercedes Sprinter 516 CDI 4x4) + Pelikan Friesland 71/11-01
    (ELW1, Einsatzleitung für den gesamten Wasserrettungszug)
- Bestehende Varel-Einträge (OPTA-Schreibweise mit Bindestrich) bewusst unverändert gelassen,
  um die Migrationserkennung bei bereits laufenden Installationen nicht zu brechen – nur die
  Skills-Beschreibung ergänzt, damit auch Varels Rolle ("Wasserrettungsgruppe-S,
  Strömungsretter") im Wasserrettungszug sichtbar wird.
- Bug beim Einbau gefunden und behoben: Die für Feuerwehr/Rettungsdienst gedachte
  OPTA-Bereichsableitung (unitPoint) hätte das Führungsfahrzeug 71/11-01 der Ortsgruppe
  Bockhorn-Zetel fälschlich nach Jever verortet, weil DLRG eine eigene, unabhängige
  OPTA-Bereichsnummerierung nutzt. Gezielt per STATION_OVERRIDE korrigiert.
- Präzise Hausadressen für die drei neuen Ortsgruppen-Standorte wurden nicht gefunden (nur die
  Fahrzeug-/Fachgruppenzuordnung), sie nutzen daher vorerst die grobe Orts-Koordinate wie zu
  Beginn bei Varel – gerne auf Zuruf mit genauer Adresse nachschärfen.
- Mit Playwright geprüft: alle 8 DLRG-Fahrzeuge laden korrekt, lösen auf die richtige
  Ortsgruppen-Koordinate auf, bestehende Installationen bekommen die 5 neuen Einheiten sauber
  nachgezogen ohne Duplikate.
- JavaScript-Syntax geprüft.

Version 3.34:
- Nachfrage zu "72-79-1" recherchiert: diese Nummer existiert nicht, aber dabei zwei echte,
  bisher fehlende Boote der DLRG Varel gefunden (Quelle: echter Einsatzbericht dlrg.de Juli 2025
  sowie bos-fahrzeuge.info) und ergänzt – passend zu den laut DLRG Bezirk Oldenburg-Nord "2
  Motorrettungsbooten" der Wasserrettungsgruppe-S Varel:
  - Pelikan Friesland 72/78-01 – Mehrzweckboot "Seelöwe" (Tinn-Silver 600, Baujahr 2021)
  - Pelikan Friesland 72/78-03 – Rettungsboot (DSB IRB 350, Baujahr 2025)
- Damit hat Varel jetzt 5 statt 3 Fahrzeuge/Boote, DLRG Friesland insgesamt 10 Einheiten.
- Mit Playwright geprüft: beide Boote laden korrekt, lösen auf die Varel-Koordinate auf,
  bestehende Installationen bekommen sie sauber nachgezogen ohne Duplikate.
- JavaScript-Syntax geprüft.

Version 3.35:
- AAO "Person im Wasser" in drei reale Einsatzarten differenziert. Neue Notruf-Frage
  "Wie ist der Zustand der Person im Wasser?" (nur bei diesem Ereignis, direkt nach der
  Wasser-Frage):
  - Mit Lebenszeichen (Standard) → Boot + Strömungsretter (GW Wasserrettung), Sonderrechte.
    Stichwort: "H_Person im Wasser R1"
  - Vermisst → Boot + Strömungsretter (GW Wasserrettung) + Taucher (GW Taucher) + Hubschrauber
    (RTH), Sonderrechte. Stichwort: "H_Person im Wasser – Vermisst R1"
  - Bergung → Boot + Taucher (GW Taucher), KEINE Sonderrechte (Person verstorben, kein
    Rettungsversuch mehr). Stichwort: "H_Person im Wasser – Bergung". XABCDE wird für diesen
    Fall konsequenterweise nicht mehr abgefragt.
  Feuerwehr (HLF) und Rettungsdienst (RTW) bleiben bei "Mit Lebenszeichen" und "Vermisst" als
  Unterstützung dabei, entfallen bei einer reinen Bergung.
- NEU: Sobald bei einem Einsatz mehr als 3 DLRG-Fahrzeuge beteiligt sind (egal ob durch die
  Erstalarmierung oder eine spätere Nachforderung/weiteres Rettungsmittel), wird automatisch
  das Führungsfahrzeug Pelikan Friesland 71/11-01 (ELW1 des Wasserrettungszugs Friesland)
  hinzugezogen, sofern es verfügbar ist und nicht schon dabei ist.
- Die AAO-Referenztabelle im Reiter "🧠 AAO" (DLRG Wasser 1–3) entsprechend auf die drei neuen
  Szenarien aktualisiert.
- Mit Playwright alle drei Wasser-Szenarien einzeln durchgetestet (korrektes Stichwort,
  korrekte Fahrzeugtypen, korrekte Sonderrechte) sowie die 71-11-01-Automatik: bei 3
  DLRG-Fahrzeugen bleibt sie draußen, sobald ein 4. hinzukommt, wird sie automatisch ergänzt.
- JavaScript-Syntax geprüft.

Version 3.36:
- Nachfrage beantwortet: Nein, die Boote der anderen 3 Ortsgruppen waren noch nicht vollständig
  drin. In echten DLRG-Einsatzberichten (dlrg.de) und Ortsgruppen-Webseiten nachrecherchiert und
  ergänzt – alle drei Gruppen hatten laut Bezirks-Angabe eigentlich weitere Boote/Fahrzeuge, die
  bisher fehlten:
  - Wangerland: 2 weitere benannte Boote gefunden – Pelikan Friesland 76/78-02 "Willi Rosenboom"
    (Tinn-Silver 600 open) und 76/78-03 "Wangerland 1". Zusammen mit dem bereits vorhandenen
    76/78-01 "Adler" (IRB Savior) hat Wangerland jetzt 3 Boote plus das Mehrzweckfahrzeug.
  - Schortens-Jever: Boot Pelikan Friesland 75/78-01 "Wellenreiter" (IRB) sowie das bisher
    fehlende eigene MTW 75/17-01 ergänzt.
  - Bockhorn-Zetel: zwei Boote ergänzt – Pelikan Friesland 77/77-01 "Freesen Deern" (MZB) und
    Adler Friesland 77/78-01 "Friesische Wehde" (RTB).
- DLRG Friesland hat damit jetzt 16 statt 10 Einheiten – deutlich vollständiger, alle mit
  Quellenbeleg (offizielle Ortsgruppen-Webseiten bzw. echte Einsatzberichte auf dlrg.de).
- Mit Playwright geprüft: alle 16 Einheiten laden korrekt, lösen auf die richtige
  Ortsgruppen-Koordinate auf, bestehende Installationen bekommen sie sauber nachgezogen, und
  die drei Wasser-Alarmierungsszenarien (v3.35) wählen weiterhin korrekt das jeweils
  nächstgelegene freie Boot aus dem größeren Fuhrpark.
- JavaScript-Syntax geprüft.

Version 3.37:
- Geländegängigkeit der 72-19-01 (GW Drohne) war bereits in den Skills hinterlegt.
- AAO für Drohneneinsätze (Personensuche an Land) war bereits größtenteils angelegt (Button
  "🛸 Vermisste Person (Suche)", eigene Alarmierungslogik: Drohne + MTW + HLF zur Unterstützung),
  allerdings mit einer doppelt vergebenen ID in der AAO-Referenztabelle – behoben (jetzt
  eindeutige ID 18).
- NEU: Das Führungsfahrzeug 71-11-01 (ELW1) wird jetzt zusätzlich automatisch hinzugezogen,
  sobald DLRG-Fahrzeuge aus MEHR ALS EINER Ortsgruppe an einem Einsatz beteiligt sind – auch
  wenn es insgesamt nur 2 Fahrzeuge sind. Die bisherige Regel (mehr als 3 DLRG-Fahrzeuge
  insgesamt, unabhängig von der Ortsgruppe) bleibt zusätzlich bestehen. Ortsgruppen-Zugehörigkeit
  wird über den Standort (Varel/Wangerland/Schortens/Bockhorn) der Fahrzeuge bestimmt.
- Mit Playwright geprüft: 2 Fahrzeuge derselben Ortsgruppe lösen die Automatik nicht aus, 2
  Fahrzeuge aus unterschiedlichen Ortsgruppen schon; Drohnen-AAO liefert korrekt Drohne, MTW und
  Feuerwehr-Unterstützung.
- JavaScript-Syntax geprüft.

Version 3.38:
- Nachforderungsliste ("Weitere Rettungsmittel" / "Nachforderung") um drei DLRG-Schnellwahl-
  Buttons ergänzt:
  - "Boot" – findet das nächstgelegene freie Boot, egal ob Typ RTB oder MZB
  - "Strömungsrettung" – wählt ein GW Wasserrettung (bisher nur unter der technischen
    Bezeichnung "GW Wasserrettung" verfügbar, jetzt mit klarem Label)
  - "Taucher" – wählt ein GW Taucher
- Dafür QUICK_RESOURCE_TYPES technisch umgebaut: unterstützt jetzt neben einem einzelnen
  Fahrzeugtyp auch eine Liste mehrerer Typen (für "Boot" = RTB oder MZB) sowie ein eigenes,
  von der technischen Typbezeichnung getrenntes Anzeige-Label.
- Mit Playwright geprüft: alle drei neuen Buttons wählen korrekt das jeweils passende,
  nächstgelegene freie Fahrzeug aus; die "Mehr als eine Ortsgruppe"-Automatik aus v3.37 zieht
  dabei auch bei Nachforderung über diese Buttons korrekt das Führungsfahrzeug 71-11-01 hinzu,
  sobald Fahrzeuge unterschiedlicher Ortsgruppen zusammenkommen.
- JavaScript-Syntax geprüft.

Version 3.39:
- Darstellung eines offenen Einsatzes deutlich kompakter: kleinere Schrift für Überschrift,
  Ort und Stichwort-Felder, weniger Innenabstand. Die Liste der alarmierten Mittel
  ("Vorschlag / alarmierte Mittel") ist jetzt deutlich kleiner geschrieben und nicht mehr
  gelb hinterlegt, sondern schlicht grau umrandet.
- Der rot blinkende "Kein eigenes RTW/NEF <20km frei"-Button hört jetzt auf zu blinken, sobald
  der Einsatz von einem Nachbar-Fahrzeug übernommen wurde – er wird durch eine ruhige,
  grün umrandete Info ersetzt ("🤝 Nachbar-Fahrzeug übernimmt: ...").
- NEU: Nachbar-Fahrzeuge können jetzt direkt alarmiert werden (Button "🚨 Alarmieren" – sowohl
  direkt im Anfrage-Dialog nach dem Absenden einer GOL-/Ostfriesland-Anfrage, als auch direkt in
  der Nachbar-LKs-Übersicht). Das alarmierte Fahrzeug wechselt dabei "auf unseren Kanal": es
  erscheint ab sofort wie ein eigenes Fahrzeug auf Status 3, sein Standort ist auf der Karte
  sichtbar und es bewegt sich wie gewohnt zum Einsatzort. Bei Einsatzabschluss wird es
  automatisch sauber an den Nachbarlandkreis zurückgegeben (dortiger Status wieder "frei").
  Nachbar-Fahrzeuge werden dabei nie versehentlich für eigene, andere Einsätze herangezogen.
- NEU: Auf der Hauptseite ersetzt ein Funkrufgruppen-Feld (wie auf echten Leitstellen-PCs) die
  bisherige reine Textüberschrift "Leitstellenübersicht". Drei Felder für Feuerwehr (F Fri 1/2/3),
  Katastrophenschutz/DLRG+THW (K Fri 1/2) und Rettungsdienst (R Fri 1/2), standardmäßig auf
  F Fri 1 / K Fri 1 / R Fri 1, umschaltbar auf die jeweils anderen Kanäle. Rein dekorativ – die
  Kanalwahl filtert nichts. Sobald ein Fahrzeug der jeweiligen Organisation auf Status 0 oder 5
  geht, poppt sein Rufname im passenden Feld auf (Status 0 weiterhin rot blinkend wie gehabt).
- Mit Playwright geprüft: kompakte Darstellung fehlerfrei, Banner verschwindet zugunsten der
  ruhigen Info sobald ein Nachbar-Fahrzeug übernimmt, alarmiertes Nachbar-Fahrzeug erscheint
  korrekt auf der Karte und wird bei Einsatzende sauber zurückgegeben, Funkrufgruppen-Felder
  zeigen Standardkanäle, lassen sich umschalten und zeigen Sprechwünsche korrekt an.
- JavaScript-Syntax geprüft.

Version 3.40:
- App-Icon (icon-192.png, icon-512.png) ersetzt durch das Taktische Zeichen einer
  Feuerwehrleitstelle: rote Feuerwehr-Farbgebung, schwarze Kontur, Headset/Funk-Piktogramm und
  "LEITSTELLE"-Schriftzug, im Stil der bekannten gemeinfreien Zeichen-Bibliothek
  jonas-koeritz/Taktische-Zeichen (CC0), in der "Leitstelle" als allgemeines
  Einrichtungs-Symbol geführt wird.
- Transparenter Hinweis: Der exakte Quellcode dieser einen Datei aus der Bibliothek ließ sich
  trotz ausführlicher Recherche nicht direkt abrufen (GitHub blockiert automatisiertes
  Durchsuchen von Ordnerstrukturen). Bestätigt werden konnte die Kategorie (allgemeines
  "Einrichtung"-Symbol, gleiche Kategorie wie Wache/Meldekopf/Hubschrauberlandeplatz) und das
  exakte Gestaltungsschema der Bibliothek anhand einer anderen, tatsächlich abgerufenen Datei
  (Fahrzeugsymbol ELW 1: farbige Fläche, dunkle Kontur, fette Schrift-Beschriftung). Das neue
  Icon ist eine eigenständige, stilkonforme Nachbildung nach diesem bestätigten Schema, keine
  pixelgenaue Kopie der Originaldatei.
- Icon bei kleiner Darstellungsgröße (192px, App-Icon-Größe) auf Lesbarkeit geprüft.
