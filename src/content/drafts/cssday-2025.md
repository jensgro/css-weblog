---
date: 2025-06-08 15:32:35+00:00
icon: css
tags:
  - css
  - konferenz
title: Cssday 2025
sources:
  - title: CSSDay
    url: https://cssday.nl/
  - title: Sketchnotes v1
    url: https://bsky.app/profile/erblack.me
  - title: Sketchnotes v2
    url: https://bsky.app/profile/ankedesign.bsky.social
  - title: Hashtag #cssday auf Bluesky
    url: https://bsky.app/hashtag/cssday
  - title: Level up your scroll UX von Adam Argyle
    url: https://nerdy.dev/cssday-2025
  - title: Open UI
    url: https://open-ui.org/
  - title: A Practical Guide to the CSS View Transition API
    url: https://cydstumpel.nl/a-practical-guide-to-the-css-view-transition-api/
  - title: CSS Scroll-driven animations for Creative Developers
    url: https://cydstumpel.nl/css-scroll-driven-animations-for-creative-developers/
  - title: Smart Layouts
    url: https://www.figma.com/deck/NewdIWNVLbsX8ipYOFZ4p8/Smart-Layouts---CSS-Day-2025?node-id=9-70&p=f&viewport=44%2C-78%2C0.03&t=RB3Tz4rgswyOw04s-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1
  - title: Multicol and Fragmentation
    url: https://noti.st/rachelandrew/mI9WWD/multicol-and-fragmentation
  - title:
    url:
  - title:
    url:
  - title:
    url:
---

Am 5. und 6. Juni 2025 fanden die [CSSDays](https://cssday.nl/) in Amsterdam zum elften Mal statt und ich hatte es endlich dahin geschafft. Meist kam in den letzten Jahren Urlaub dazwischen. Die Reise hatte sich gelohnt.
Die CSSDays sind eindeutig eine Konferenz für CSS-Profis. Keine überflüssigen Einführungen in bekannte Techniken. Die Teilnehmer werden als Profis ernstgenommen. Das bedeutete:

- Die Vortragenden gingen meist direkt ins Thema, hielten sich nicht mit zuviel Details auf.
- Wir bekamen von vielen Vortragenden die schon fast flehende Bitte, man möge sich doch am Standardisierungsprozess beteiligen. Dabei wurden vor allem Bugreports, Feature-Requests und Fallbeispiele gewünscht.
- In vielen Beispielen wurden wie selbstverständlich Techniken verwendet, über die ich maximal gelesen hatte, aber sie nie eingesetzt habe. Und sie scheinen abseits von Protytotypen und Artikeln sinnvoll zu sein.
- Eigene Notizen waren mir fast unmöglich. Ein länger ausformulierter Gedanke und ich habe den nächsten oder sogar übernächsten Inhalt verpasst.

## Notizen?

Das Fehlen eigener Notizen wurde durch zwei Menschen ausgeglichen, die tolle Sketchnotes erstellten und dann auf Bluesky hochluden ([Account 1](https://bsky.app/profile/erblack.me), [Account 2](https://bsky.app/profile/ankedesign.bsky.social)). Die offizielle Kommunikation mit dem Hashtag [#cssday](https://bsky.app/hashtag/cssday) lief ausschliesslich über Bluesky.

Jeder Vortrag und jede Q&A im Nachgang wurde live von [Amanda aus New Mexiko](https://bsky.app/profile/did:plc:vpxbyqkjhudaldaaurajktr4) (!) transkribiert. Die Transkription lief mit einem ganz kurzen Versatz auf einem großen Bildschirm mit. So konnte jeder, egal ob hörgeschädigt oder nicht, den Vorträgen auch lesend folgen. Bei manchen hingenuschelten Worten war mir das eine große Hilfe. Amanda zeigt [in einem Post](https://bsky.app/profile/asignia.bsky.social/post/3lqwheg5kb22t) ihr technisches Setup. Sie hat offenbar eine Art Tastatur, über die sie Steno tippt. Einfach irre.

## Wichtige Nebensächlichkeiten

Die Struktur des Tages war gut durchdacht. Morgens gab es nach dem ersten Vortrag eine längere Kaffeepause und danach kamen immer zwei Vorträge hintereinander, denen dann eine Pause folgte.

Die Mittagspause war sehr lang und dadurch auch sehr erholsam. Überall poppten kleinen Disskussionszirkel auf, nebenher wurde auch gegessen. Das Buffet war nicht übermässig voll, was ich sehr gut finde. Niemand ist aus kulinarischen Gründen bei den CSSDays.

## Die Vorträge

Die Liste der Teilnehmer und Themen war vielversprechend. Ich versuche einen kurzen Überblick zu geben.

### Adam Argyle: Level up your scroll UX

Adam kümmerte sich um Scrollbars. Ihn interessierten dabei weniger die der Seite, als die der Module auf einer Seite. So ganz nebenbei erzählte er von Unterschieden zwischen Browsern (Safari tanzt wieder aus der Reihe), gegen die man nichts machen kann. Oder auch die schöne Idee, die einzelnen Schritte eines Codes in `@layer` zu unterteilen und die dann als `@slayer` erst einmal "auszuschalten". Durch das Löschen des hinzugefügten "s" wird der `@layer` wieder interpretiert.

Adam schoss wieder ein Feuerwerk an Beispiele und tollen Ideen ab. Wir gut, dass er seine Experimente immer offen [in Codepen]
(https://codepen.io/collection/JYdmwr) oder [auf seiner Seite](https://nerdy.dev/cssday-2025) dokumentiert und seine Talks veröffentlicht. Es ist quasi unmöglich alle guten Ideen und Details mitzuschreiben. Aber ein Nacharbeiten [seines Vortrags](https://css-day-2025.argyleink.deno.net/) ist sicherlich sehr hilfreich. Und dabei sollten man immer auch auf mögliche cross-browser Probleme achten, die Adam gerne mal unter den Tisch fallen lässt. Der Vortrag zeigte, dass man sich viel Gedanken über Details machen kann und sollte. Und er zeigte dadurch auch, wieviel heute möglich ist.

### John Allsopp: A Dao of CSS

John Allsopp veröffentlichte im Jahr 2000 bei A List Apart einen Grundsatzartikel, der noch heute lesbar und wahr ist: [A Dao of Webdesign](https://alistapart.com/article/dao/). In seinem aktuellen Vortrag nahm er den Grundgedanken auf und schaute auf sieben Grundprinzipien des Dao und verglich diese mit CSS-Techniken. Die Prinzipien hier aufzuführen erklärt leider nicht die Inhalte. Im Prinzip sortierte er den Prinzipien einzelne Techniken und Funktionsweisen von CSS zu.

1. The few as many
2. Less and less
3. Code without coding
4. Softness is strength
5. Balance without effort
6. Yield to context
7. Humility

Ich liebe solche Vorträge. Im Detail lerne ich nichts Neues. Aber ich lerne eine neue Sichtweise kennen. Mein Blick auf meine Arbeit wird verändert, bereichert. Und auch hier sind es manchmal die kleinen Nebensächlichkeiten, die mich zum Weiterdenken bewegen. Wie einige andere Sprecher auch nutzte John HTML zur Präsentation. Das tue ich auch seit vielen Jahren, indem ich [reveal.js](https://revealjs.com/) nutze. Reveal packt alle Inhalte in eine einzelne Seite, man kann also fast von einer SPA sprechen. John splittete jeden Slide in eine einzelen HTML-Seite, sodass er keine SPA sondern eine klassische Webseite hatte. Manchmal sind es solche Details, die bei mir hängen bleiben.

Ich bin auf die Aufzeichnung gespannt, damit ich den Vortrag noch einmal in Ruhe nachvollziehen kann. Einen Artikel scheint es nicht zu geben und eine öffentliche Version seines Vortrages ebenso nicht.

### Miriam Suzanne: Is Sass Dead Yet? CSS Mixins & Functions

Miriam Suzanne war viele Jahre sehr stark in der Weiterentwicklung von Sass beschäftigt, hatte auch mal ein eigenes Sass-Gridsystem erstellt. In den letzten Jahren engagiert sie sich sehr für neue Standards. Container Queries haben wir ihr zu verdanken.

Nun hat sie sich um eine Spezifikation für [Funktionen und Mixins](https://slides.oddbird.net/mixins/cssday/) innerhalb von CSS bemüht. Im Prinzip war der Vortrag eine rein theoretische Geschichte, denn es gibt noch keine Implementierung. Aber die Ideen sind vielversprechend. Werden sie Realität und sterben die Browser aus, die nichts damit anfangen können, dann gibt es zwei Argumente weniger hat für Sass.

Sehr schön fand ich, dass Miriam mehrfach betonte, dass man weder mit noch ohne Sass etwas falsch mache. Man solle die Tools nutzen, die für einen selber und das Projekt am Praktischsten sind. Sie wollte nichts verkaufen, nichts ausgrenzen.

Miriam holte sehr weit aus, um das Thema zu erklären. Aber das war sehr erhellend und hilfreich. Denn sie machte klar, dass die Sprache an sich schon sehr komplex ist. Als Bonus bekamen wir auch noch einen ausführlichen Abstecher in interessante Details von custom properties (a.k.a. CSS Variablen). Und wegen dieses Exkurses wurde auch jedem im Raum klar, wo die Schwierigkeiten in der Umsetzung dieser Ideen sind. Denn wie bei den Variablen wird das Konzept von Präprozessoren genommen und in CSS eingebaut.

Aber beide Techniken funktionieren unterschiedlich. Wie der Name es schon sagt, wir der Code es Präprozessors wie Sass **vor** der Ausführung im Browser behandelt. Eine Variable wird dann also aufgelöst, wohingegen sie bei CSS im Code existent bleibt. Ähnliches wird auch bei Mixins und Funktionenn passieren. Die Idee ist die gleiche zwischen CSS und Sass/Less. Aber die Umsetzung wird sich unterscheiden.

Ich bin gespannt, wie schnell diese Spezifikation finalisiert und implementiert wird.

### Cyd Stumpel: CSS tried to come for my job

[Cyd](https://cydstumpel.nl/) beschäftigt sich viel mit Animationen, manche einfach, einige komplex. Sie hat in der Vergangenheit deshalb sehr intensiv mit JavaScript-Animationstools gearbeitet. Da CSS aber immer mächtiger wird, zeigte sie uns, was man heute alles mit ein paar Zeilen CSS animieren kann. Alles unter dem Motto "das ist ganz einfach" - was eindeutig im Auge des Betrachters liegt. Ein großer Fokus waren dabei [view-transitions](https://developer.chrome.com/docs/web-platform/view-transitions/) im [praktischen Einsatz](https://codepen.io/Sidstumple/pen/ByyJqmy) und [scroll-driven animations](https://cydstumpel.nl/css-scroll-driven-animations-for-creative-developers/).

### Brecht De Ruyte: Select it! Styling new HTML UI capabilities

Der Belgier Brecht de Ruyte warb für das Engagement in der Gruppe [OpenUI](https://open-ui.org/) und nahm sich als ein Beispiel für deren Output die kommenden Änderungen am Select-Element vor. In seinem Blog hat er [eine dreiteilige Serie](https://utilitybend.com/blog/the-customizable-select-part-one-history-trickery-and-styling-the-select-with-css) darüber verfasst.

Es war extrem beeindruckend zu sehen, in welcher Form wir demnächst in allen Browsern das Select-Element gestalten können.

### Rachel Andrew: Multicol and fragmentation

Rachel widmete sich einer selten genutzten Technik: der [mehrspaltigen Formatierung](https://noti.st/rachelandrew/mI9WWD/multicol-and-fragmentation). Sie stellte sehr treffend die zahlreichen Probleme der Technik dar und endete mit dem aktuelen Vorschlag der Erneuerung der Technik.

Dazwischen unternahm sie einen umfangreichen Exkurs in die [Fragmentation-Spec](https://www.w3.org/TR/css-break-3/). Diese ist immer dann wichtig, wenn Inhalte in einen neuen Kontext überführt werden sollen - oder auch nicht. Das betrifft natürlich ein Mehrspalten-Layout, aber auch den Druck von Webseiten. Schliesslich müssen da Seitenumbrüche definiert werden.

Es war wieder einmal sehr erhellend, Rachel zuzuhören. Ich habe wieder viele Details der Browserinnereien kennengelernt. Solche Vorträge und die darin befindlichen Exkurse finde ich immer sehr wertvoll, um ein besseres Gesamtbild von CSS (und HTML) zu bekommen.

Sollte die Spec irgendwann umgesetzt werden, werden wir eine Art "Grid light" bekommen. Nach kurzem Überlegen finde ich diese Lösung sehr passend und gut. Ich hoffe, die Browserhersteller beeilen sich. Denn diese Neuerung könnte vor allem auf textintensiven Newsseiten neue Optionen für das Design eröffnen.

Interessant und erfrischend fand ich, dass sie mehrfach betonte, dass Analogien zum Printdesign nichts Böses wären. Sie würden

### Brad & Ian Frost: Design Token Architecture

Der erste Tag endete mit einem inhaltlich schwachen Vortrag. Brad Frost hatte aus unerfindlichen Gründen seinen Bruder mitgeschleppt und liess ihm dann nur wenige Minuten Zeit. Ansonsten redete er, so wie wir es gewohnt sind. Als der Vortrag interessant zu weden drohte war er vorbei. Ich trete ihm wohl nicht zu nahe, wenn ich vermute, dass sie nur anwesend waren, um ihren 900 Dollar teuren Kurs über Design Tokens zu bewerben.

Es gab leider keine tieferen Einsichten in Tokens, keine guten Tipps für Benamung, Sortierung, Umgang mit Tools. Wer sich wie ich schon einmal mit Tokens und deren Implementierung in Figma beschäftigt hat, langweilte sich. Und ich denke, alle anderen waren nachher nicht viel schlauer als zuvor.

### Chris Coyier: Scope in CSS

### Ahmad Shadeed: Smart layouts

Das war einer der Vorträge, auf die ich mich am Meisten gefreut habe. Ahmad betreibt ein sehr interessantes Blog und hat im letzten Jahr einen enormen Sprung gemacht, seine Inhalte zu präsentieren und nachvollziehbar zu machen.

Im Grunde drehte sich sein Vortrag darum, möglichst auf Media Queries zu verzichten und den Browser die Arbeit machen zu lassen. Wir kennen diese Idee als Intrinsic Layout. Ahmad zeigte uns, wie wir mit kreativer Kombination aller mittlerweile existierender moderner Techniken zu sehr anpassbaren Layouts kommen.

Er zeigt auch, wie man ein Layout ändern kann, je nach dem ob sich in einem Container Inhalte befinden oder einen bestimmten Umfang überschreiten. Eine sehr pfiffige Idee. Ich bin mal gespannt, was meine Designer-Kollegen dazu sagen. Es wäre ein Kontrollaspekt weniger.

Es war ein Genuss, den Beispiellayouts zu folgen. Zum Glück hat er [sein Slidedeck](https://www.figma.com/deck/NewdIWNVLbsX8ipYOFZ4p8/Smart-Layouts---CSS-Day-2025?node-id=9-70&p=f&viewport=44%2C-78%2C0.03&t=RB3Tz4rgswyOw04s-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1) veröffentlicht. Ich wusste ja, dass er viele Slides hatte, aber 224 Slides bei einer Dreiviertelstunde Redezeit ist dann doch sportlich.

### Tim Nguyen: Form control styling

Tim arbeitet für Apple und kümmert sich u.a. um die Standardisierung von Stylingtechniken für Formulare. Dieser Talk war wieder viel Zukunftsmusik. Aber eine Musik, die ich sehr gerne höre. Schließlich werden die Formularelemente seit jeher sehr stiefmütterlich behandelt. Insbesondere aus CSS-Sicht.

Tim präsentierte den frischen [Editors Draft](https://drafts.csswg.org/css-forms/). Alles baut auf der neuen Eigenschaft `appearance: base` und einer großen Zahl neuer Pseudoelemente und Pseudoselektoren auf.

Endlich geht die Entwicklung in die richtige Richtung. All das, was wir aktuell in den Devtools als Shadow DOM sehen, soll vereinheitlicht werden und von aussen gestaltbar sein. Leider ist noch nichts in Browsern implementiert. Aber ich kann mir vorstellen, dass es bald geschehen wird.

### Amit Sheen: Building a Computer with CSS

Dies war ein Spaßvortrag, der so ziemlich jeden bass erstaunt zurück liess. Erst einmal definierte [Amit](https://codepen.io/amit_sheen/), was eine CPU ist: eine Einheit, die logische Berechnungen durchführt. Für mich als Nicht-Informatiker war das etwas Neues. Ich stelle mir da immer ein Hardwareteil drunter vor.

Sodann hob er an, alle logischen Operatoren in CSS zu implementieren. Durch intensive Nutzung des `:has()`- und des `:not()`-Selektors in Zusammenarbeit mit wengen Checkboxen war es ihm möglich, innerhalb relativ kurzer Zeit eine CPU zu bauen.

### Ana Rodrigues: Refactoring CSS

Von diesem [Vortrag](https://noti.st/anarodrigues/abfj0M/refactoring-css) hatte ich mir ein paar praktische Tipps oder Hinweise auf Tools erhofft. Ich fand ihn inhaltlich leichtgewichtig, so wie den von Brad Frost. Nichts, was ich nicht schon vorher gewusst hätte. Schön erzählt, aber wenig erhellend.

### Hidde de Vries: display: green; applying the web sustainability guidelines

### Bruce Lawson: The goose and the common
