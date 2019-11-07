/*eslint-disable no-undef */
const path = require("path")
const fs = require("fs")
const svg2img = require("svg2img")
const defaultOptions = require("./default")
const icons = require("./icons")

const template = (scope, name) =>
`<?xml version="1.0" encoding="UTF-8"?>
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

Object.keys(icons).forEach(key => {
    const data = template(icons[key].scope, icons[key].name)
    fs.writeFileSync(`preferences/${key}.tmPreferences`, data, err => {
        if (err) {
            console.log(err)
        }
    })
})

fs.readdirSync("./src/svg/").forEach(icon => {
    const iconPath = path.join(__dirname, `/../src/svg/${icon}`)
    icon = icon
        .split(".")
        .slice(0, -1)
        .join(".")
    fs.readFile(iconPath, "utf8", (err, data) => {
        if (err) throw err
        data = Buffer.from(data, "utf8")
        defaultOptions.settings.forEach(setting => {
            svg2img(
                data,
                { width: setting.size, height: setting.size },
                function(error, buffer) {
                    fs.writeFileSync(
                        `icons/${
                            setting.suffix ? icon + setting.suffix : icon
                        }.png`,
                        buffer,
                        err => {
                            if (err) {
                                console.log(err)
                            }
                        }
                    )
                }
            )
        })
    })
})
