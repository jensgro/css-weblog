---
title: Modalfenster sind standardisiert
icon: html5
date: 2025-02-05
eleventyExcludeFromCollections: true

tags:
    - css
    - html
sources:
    - title: MDN über das dialog-Element
      url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
    - title: Beispiel von Kevin Powell
      url: https://codepen.io/kevinpowell/pen/gOBpXVV
    - title: Beispiele von Adam Argyle
      url: https://codepen.io/argyleink/pen/VwJvqrW
    - title: Mein Beispiel zum dialog-Element
      url: https://codepen.io/jensgro/pen/dyBrrEJ
    - title: Mein Beispiel zum popover-Attribut
      url: https://codepen.io/jensgro/pen/dyBLRrV
---

Modalfenster (vulgo Popup) sind jetzt standardisiert. Wir benötigen nur noch minimales JavaScript (oder auch keins).

Auch das Abdunkeln und Sperren der Seite ist jetzt mit neuem CSS möglich.

Es gibt zwei Wege, ein Modalfenster zu öffnen:

1. Das dialog-Element
2. Das popover-Attribut

## Das dialog-Element

Das HTML ist schlicht:

{% highlight "html" %}
	<dialog>
		<h2>Willkommen im Dialog</h2>
		<p>Lorem ipsum ...</p>
		<button autofocus class="btn close">Schliessen</button>
	</dialog>
{% endhighlight %}

Mittels CSS können wir nun zwei Aspekte ganz einfach steuern:

1. Wir können verhindern, dass die Seite hinter dem Dialogfenster scrollbar ist.
2. Wir können eine flächendeckende Verdunkelung definieren. Dafür müssen wir kein leeres ``DIV`` erstellen.

{% highlight "css" %}
/* Die Seite hinter dem Dialog "sperren" */
html:has(dialog[open]) {
  overflow: hidden;
}

/* Abdunkelung */
::backdrop {
  background-color: rgba(15,15,15, 0.85);
}
{% endhighlight %}

Zu guter Letzt benötigen wir ein klein wenig JavaScript, um das Fenster zu öffnen und zu schliessen:

{% highlight "js" %}
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

// "showModal" öffnet das Dialogelement als Modalfenster
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "close" schliesst das Dialogelement
closeButton.addEventListener("click", () => {
  dialog.close();
});
{% endhighlight %}

Ein [Codepen](https://codepen.io/jensgro/pen/dyBrrEJ) demonstriert das Ergebnis.

## Das popover-Attribut

Das neue `popover`-Attribut ist global, kann also an so ziemlich alles gehängt werden. Ein Element mit dem Attribut ``popover`` wird mittels ``display: none`` ausgeblendet. Es wird dann mittels ``popovertarget`` getriggert. Diese Aktion geschieht gänzlich ohne JavaScript, nur mittels Verknüpfung im HTML.

Das Popover liegt in einer eigenen Ebene ganz oben und kann durch Positionierung auch der Elternelemente nicht beeinflusst werden. Als Standard kann nur ein Popover gleichzeitig gezeigt werden. Dieses schliesst sich bei Klick ausserhalb. Durch ``popover="manual"`` können mehrere Popover aufgerufen werden. Diese müssen allerdings immer bewusst geschlossen werden. Dafür wird dann minimales JavaScript benötigt.

Das Browser-CSS sieht folgendermaßen aus:

{% highlight "css" %}
[popover] {
    position: fixed;
    width: fit-content;
    height: fit-content;
    color: canvastext;
    background-color: canvas;
    inset: 0px;
    margin: auto;
    border-width: initial;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    padding: 0.25em;
    overflow: auto;
}
{% endhighlight %}

[Codepen](https://codepen.io/jensgro/pen/dyBLRrV)
