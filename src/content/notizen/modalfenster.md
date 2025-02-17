---
title: Modalfenster sind standardisiert
icon: html5
date: 2025-02-18

tags:
    - css
    - html
sources:
    - title: MDN über das dialog-Element
      url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
    - title: Dialogs and popovers seem similar. How are they different?
      url: https://hidde.blog/dialog-modal-popover-differences/
    - title: What’s the Difference Between HTML’s Dialog Element and Popovers?
      url: https://frontendmasters.com/blog/whats-the-difference-between-htmls-dialog-element-and-popovers/
    - title: "On popover accessibility: what the browser does and doesn’t do"
      url: https://hidde.blog/popover-accessibility/ 
    - title: "Dialog dilemmas and modal mischief: on building popovers"
      url: https://talks.hiddedevries.nl/VZNuWJ
    - title: Use the dialog element (reasonably)
      url: https://www.scottohara.me/blog/2023/01/26/use-the-dialog-element.html
    - title: Building a dialog component
      url: https://web.dev/articles/building/a-dialog-component
    - title: The Popover API is now Baseline Newly available
      url: https://web.dev/blog/popover-baseline/
    - title: Tooltips mit Popover
      url: https://wiki.selfhtml.org/wiki/Infobox/Tooltips_mit_Popover
    - title: Beispiel von Kevin Powell
      url: https://codepen.io/kevinpowell/pen/gOBpXVV
    - title: Beispiele von Adam Argyle
      url: https://codepen.io/argyleink/pen/VwJvqrW
    - title: Mein Beispiel zum dialog-Element
      url: https://codepen.io/jensgro/pen/dyBrrEJ
    - title: Mein Beispiel zum popover-Attribut
      url: https://codepen.io/jensgro/pen/dyBLRrV
---

Modalfenster (vulgo Popup, Layer, Overlay) sind jetzt standardisiert. Bislang haben  wir unsere eigenen Varianten von Modalfenstern mit individuellem HTML, JavaScript und CSS erstellt. Die Implementierungen differierten logischerweise. Mittlerweile wurde dieses Feature standardisiert und in allen Evergreen-Browsern implementiert. Es gibt ein neues HTML-Element, das nur noch minimales JavaScript (oder auch keins) benötigt. Auch das Abdunkeln und Sperren der Seite ist jetzt mit neuem CSS möglich. Wir diese Neuerung zum Anlass nehmen, bestehende Projekte von unnötigem Code (HTML, JS, CSS) zu befreien und neue Projekte mit einfacherem Code zu beginnen.

Es gibt zwei Wege, ein Modalfenster zu öffnen:

1. Das dialog-Element
2. Das popover-Attribut

Die unterschiedlichen Wege stehen für unterschiedliche Typen von Modalfenstern. Das ``dialog``-Element ist für Kommunikationselemente gedacht, die die weitere Bedienung der Webseite blocken. Deshalb erscheinen sie nur einzeln. 
Das ``popover``-Attribut kann an viele verschiedene Elemente gepackt werden. Es blockt nicht den Rest der Seite und kann mehrfach auftreten. Es ist viel mehr für Design-Elemente nutzbar, als das ``dialog``-Element.

Beide haben gemein, dass die Browserhersteller eine neue künstliche Ebene für sie konstruierten: den **top-layer**. Kein anderes Element kann mit einem noch so hohen ``z-index`` an diesen Layer herankommen oder sich gar drüber legen. Dieser neue Layer wird neben dem geöffneten Element in den Browser-Devtools angezeigt. So wie dort auch eine Flexbox-Umgebung markiert ist.

Ein solches Modalfenster sieht auf den ersten Blick simpel aus. Der Teufel steckt wie immer im Detail, eher in den Details. Hidde de Vries widmet sich diesen Details ausführlich und kenntnisreich in seinem sehr lesenswerten Artikel "[Dialogs and popovers seem similar. How are they different?](https://hidde.blog/dialog-modal-popover-differences/)". Auch die anderen unten verlinkten Quellen sind lesenswert. Sie eröffnen wichtige Perspektiven. 

Wir schauen uns in diesem Artikel nur die absoluten Basics an. Sie befähigen zu eigenen Experimenten. Ich bin begeistert von der einfachen Art, mit Modalfenstern jeglicher Art umzugehen. Mal schauen, ob wir bspw. ein typisches Burgermenü demnächst grundsätzlich mit einem popover ausstatten. 

{% aside %}
In einer früheren Version dieser Seite hatte ich das Burgermenü erfolgreich mittels ``popover``-Attribut realisiert. Nach dem Wegfall eines Menüpunktes war das Burgermenü unnötig geworden. Es kann aber sein, dass komplexere Menüs mit dieser Technik an ihre Grenzen kommen. Ich bin auf Testcases gespannt.
{% endaside %}

## Das dialog-Element

Das neue HTML-Element bringt automatisch die wichtigsten Features mit, die wir sonst mittels JavaScript und CSS individuell erzeugen mussten:

1. Es ist initial versteckt.
2. Wenn es dargestellt wird, ist es immer auf der obersten Ebene.
3. Die typische Abdunkelungsfläche muss nicht extra mit einem leeren Container erzeugt werden. Es gibt einen CSS-Selektor dafür.

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

{% baseline "dialog" %}

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

{% baseline "popover" %}