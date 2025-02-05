---
title: Feature Queries
icon: css
date: 2025-02-01
tags:
    - css
---
Die Browser sind allesamt viel besser geworden, als sie noch vor ein paar Jahren waren. Trotzdem sind nicht alle Features in allen Browsern verbaut. 

Mit einer Feature Query kann man den eingeschlossenen Code nur den Browsern zur Verfügung stellen, die etwas mit ihm anfangen können. Also sowas wie Modernizr ohne JS.

{% highlight "css" %}
.my-element {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space, 1.5rem);
}
@supports (width: calc(min(376px, 100%))) {
  .my-element {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(min(376px, 100%)), 1fr));
    gap: 1.5rem;
  }
}
{% endhighlight %}

{% baseline "supports" %}
