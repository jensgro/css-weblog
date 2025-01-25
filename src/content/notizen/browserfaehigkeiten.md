---
title: Übersicht über Fähigkeiten der Browser
date: 2025-01-20
tags:
  - browser
---

Egal wie man es wendet, wir müssen uns als Frontendentwickler immer wieder damit auseinandersetzen, welche Fähigkeiten die einzelnen Browser haben. Nicht alle HTML- und CSS-Techniken sind jemals in allen Browsern umgesetzt worden und trotz [der Anstrengungen der Browserhersteller](kooperation-der-browserhersteller.html) werden Features selten bis nie gleichzeitig umgesetzt.

Selbstverständlich sollte jeder Frontend-Entwickler [caniuse](https://caniuse.com) kennen. Es gibt aber noch mehr Übersichten über die Browserfähigkeiten. Am Ende einer jeden Technik steht bei [MDN](https://developer.mozilla.org/en-US/docs/Web) eine passende Übersicht. 

Eine andere Form der Darstellung und Aussenkommunikation bietet die [Baseline-Initiative](https://web-platform-dx.github.io/web-features/). Auf der [Übersichtsseite von Baseline](https://web.dev/baseline) werden die gemeinsam umgesetzten Features präsentiert. Die für jeden verfügbare [Webcomponent von Baseline](https://github.com/web-platform-dx/baseline-status) ist mittlerweile auch bei CanIUse und MDN eingebunden. Sie ermöglicht eine sehr schnelle Erfassung des Status Quo der Technik in den gängigen Evergreen Browsern.

Ich habe mir zum Testen [einen Codepen](https://codepen.io/jensgro/pen/dPbKdzm) erstellt. Mir fehlen ehrlich gesagt zwei Informationen, die spätestens im Aufklapper existieren sollten: ab welcher Version eines Browsers die Technik unterstützt wird und welche Browserversion jeweils die aktuelle ist. Man kann es natürlich auch abkürzen und das Releasedatums der ersten unterstützenden Browserversion ausgeben.
Dadurch könnte man abschätzen, wie groß die Verbreitung aktuell ist. Vielleicht kommt diese Ergänzung ja noch.

Interessant finde ich auch folgende Seiten:

- [https://caniwebview.com/search/?cat=web_feature](CanIWebview) - CanIUse für die unterschiedlichen Webviews.
- [Chart of CSS & web platform feature support in evergreen browsers](https://www.fffuel.co/rrready/)
- [Can We](https://canwe.dev/) - Liste mehrerer Projekte, die sich mit Fähigkeiten von Browsern und assistiver Technologie beschäftigen
- [Can I Email](https://www.caniemail.com/) - Welcher gängige Mailclient kann welche Technik?