# Ristretto, a clean Hugo theme

`Ristretto` is a lightweight, minimalist template for [Hugo](https://gohugo.io). It uses little to no Javascript, the final uncompressed page weighting around 30kb.


## Installation

Download the theme from GitHub and add it to your site's `themes` directory. Inside the folder of your Hugo site run:

```
$ git init  # (only if you haven't done this before)
$ git submodule add https://github.com/robertozoia/hugo-theme-ristretto.git themes/ristretto

```

[Demo Site](#)

## The config file

Inside the `exampleSite` folder of this theme, you'll find a file called `config.toml`.


### Menus

Ristretto provides two navigation menus: 

* An horizontal menu on the top of the page.
* A list of links in the footer.

To configure this menu, modify your `config.toml` file:

```
[menu]

    # Top menu
    [[menu.main]]
    identifier = "Posts"
    name = "Posts"
    url = "/post/"
    weight = 1

    [[menu.main]]
    identifier = "book-reviews"
    name = "Book Reviews"
    url = "/categories/book-review/"
    weight = 2

    [[menu.main]]
    identifier = "goal-setting-book"
    name = "Effective Goal Setting"
    url = "/effective-goal-setting-book/"
    weight = 3
    
    # Footer links
    [[menu.footer]]
    identifyer = "now"
    name = "What I'm doing now"
    url = "/now/"
    weight = 10

    [[menu.footer]]
    identifier = "512kb"
    name = "512kb Green Team"
    url = "https://512kb.club"
    weight = 12

```


### Theme-specific Parameters

#### Comment by email
`Ristrtto` implements a simple "comment via email" button. This button appears at the end of each page.

* `reply_to` to specify the reply-to address.
* `reply_to_disable`: set to `true` in the content's frontmatter to hide the comment-by-email button for that page.


#### Subscribe to Mailchimp newsletter

If you use Mailchimp for your newsletter subscriptions, you can use the following parameters in your `config.toml`  file:

```
mailchimp_hide_subscription_box = false
mailchimp_user_id = "1234567890"
mailchimp_hide_subscription = false
```

You can modify the `mailchimp_hide_subsciption` in the frontmatter to show or hide the subscription box on a per-page basis.

## RSS feed

### Full Content vs. Summary Content in feeds

`Ristretto` will show full content for RSS feeds. The idea is to make this configurable in the future.  For now, if you want to change to summary content for your feeds, you'll need to modify the `rss.xml` template in `layouts/_default`:


```
  (...)
  {{ with .Site.Author.email }}<author>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</author>{{end}}
      <guid>{{ .Permalink }}</guid>
      <description>{{ .Content | html }}</description>
    </item>
    {{ end }}{{ end }}
  </channel>
```

Go to the end of the file and change `.Content` for `.Summary`.

### Excluding a page from the RSS feed

If you need to exclude a page from appearing in the RSS feed, use the `rss_ignore` parameter in the frontmatter:

``` toml
+++
(...)
rss_ignore = true
+++
```






## Modifying the Stylesheet

`Ristretto` uses [TailwindCSS](https://tailwindcss.com) for styling. As TailwindCSS is a utility-first CSS framework, most styling decisions have been indicated directly in the template's HTML code. 

When we don't control the output--for example, Markdown output--, the styles applied are defined in the `assets/css/styles.css` file. If you want to modify the CSS code, install TailwindCSS and modify the `src/tailwind.css` file. THen run the `build.sh` script so Tailwind rebuilds the `styles.css` file. 

To reduce loading time, `Ristretto` copies the minified CSS code directly into the webpage. 

