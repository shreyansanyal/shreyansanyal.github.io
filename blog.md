---
layout: page
title: Blog
permalink: /blog/
---

<h1>Shreyan's Blog</h1>


<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      {% if post.cover %}
      <div class="cover-container">
          <img src="{{ post.cover }}" alt="Cover image" class="cover">
      </div>
      {% endif %}
      <div class="post-content">
          <div class="post-header">
              <a href="{{ post.url }}" class="post-title">{{ post.title }}</a>
              <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
          </div>
          <p class="post-preview">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      </div>
    </li>
  {% endfor %}
</ul>