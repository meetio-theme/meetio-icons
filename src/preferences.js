/*eslint-disable no-undef */
const fs = require("fs")
const icons = require("./settings/icons")

const preferences = (scope, name) => `<?xml version="1.0" encoding="UTF-8"?>
<plist version="1.0">
  <dict>
    <key>scope</key>
    <string>${scope}</string>
    <key>settings</key>
    <dict>
      <key>icon</key>
      <string>${name}</string>
    </dict>
  </dict>
</plist>
`

const syntax = (name, extensions, scope, base) => `%YAML 1.2
---
# http://www.sublimetext.com/docs/3/syntax.html
name: ${name}
hidden: true
file_extensions: ${JSON.stringify(extensions)}
scope: ${scope}
contexts:
  main:
    - include: scope:${base || scope}`

Object.keys(icons).forEach(key => {
    let template
    const { aliases, syntaxes } = icons[key]
    const settings = aliases || syntaxes

    template = preferences(settings[0].scope, key)
    fs.writeFileSync(`preferences/${key}.tmPreferences`, template, err => {
        if (err) {
            console.log(err)
        }
    })

    if (settings[0].extensions) {
        if (settings.length > 1) {
            for (const i in settings) {
                template = syntax(
                    settings[i].name,
                    settings[i].extensions,
                    settings[i].scope,
                    settings[i].base
                )
                fs.writeFileSync(
                    `aliases/${settings[i].name}.sublime-syntax`,
                    template,
                    err => {
                        if (err) {
                            console.log(err)
                        }
                    }
                )
            }
        } else {
            template = syntax(
                settings[0].name,
                settings[0].extensions,
                settings[0].scope,
                settings[0].base
            )
            fs.writeFileSync(
                `aliases/${settings[0].name}.sublime-syntax`,
                template,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }
})
