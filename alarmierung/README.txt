JET Alarmierung – Version 1.0
==============================

Eigenständige App im Ordner /alarmierung. Nutzt dieselbe Firebase-Datenbank wie die Leitstelle
(eigener Bereich /alarmierung/<Kanal>), die Leitstelle selbst bleibt unverändert.

Aufruf: <GitHub-Pages-Adresse>/alarmierung/

Reiter "Geräte verwalten"
- QR-Code: Handy scannt ihn, gibt einen Namen ein – fertig angemeldet.
- Trupps anlegen, umbenennen, sortieren (▲▼), löschen.
- Geräteliste: neue Geräte stehen oben ("neu / ohne Trupp"). Ein Tipp auf einen Trupp ordnet zu,
  nochmal tippen oder "ohne" hebt die Zuordnung auf. "Entfernen" meldet das Handy sofort ab.
- Grüner Punkt = Gerät hat sich in den letzten ~75 s gemeldet.
- "Verbindung": Datenbank-URL und Kanal. Neuer Kanal = alle Geräte müssen neu scannen.

Reiter "Monitor"
- Ziel wählen: "Alle" oder einen/mehrere Trupps.
- "Alarmieren": Stichwort + Text, Handy zeigt roten Vollbild-Alarm mit Ton und Vibration,
  Rückmeldung "Komme" / "Komme nicht".
- "Nur Text": Nachricht mit kurzem Hinweiston, Rückmeldung "Gelesen".
- Protokoll zeigt pro Meldung, wer kommt, wer nicht, wer noch offen ist.

Auf dem Handy
- Nach der Anmeldung einmal "Empfang aktivieren" tippen (Browser erlauben Ton nur nach Tippen).
  Dabei wird auch "Bildschirm bleibt an" eingeschaltet, sofern das Gerät es unterstützt.
- Als App: iPhone Safari → Teilen → "Zum Home-Bildschirm"; Android Chrome → Menü → "App installieren".
  Die Anmeldung wird mitgenommen.

WICHTIG – Grenzen
- Alarme kommen nur an, solange die App auf dem Handy geöffnet ist (Bildschirm an oder kurz im
  Hintergrund). Gesperrte Handys oder geschlossene Apps werden NICHT geweckt. Dafür bräuchte es
  echte Push-Benachrichtigungen (Firebase Cloud Messaging + Cloud Function, kostenpflichtiger
  Firebase-Tarif). Nicht quittierte Alarme der letzten 15 Minuten erscheinen beim Öffnen der App.
- Übungs-/Trainingswerkzeug, kein Ersatz für eine zugelassene Alarmierung (DME/Pager).
- Wer den QR-Link hat, kann sich anmelden. Bei offenen Firebase-Regeln kann jeder mit der
  Datenbank-URL mitlesen – keine personenbezogenen oder Einsatz-Echtdaten eintragen.
- Die Firebase-Regeln müssen Lesen/Schreiben unter /alarmierung erlauben (bei den offenen
  Übungsregeln aus FIREBASE_SETUP.txt ist das der Fall).
