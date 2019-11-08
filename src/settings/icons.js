/*eslint-disable no-undef */
module.exports = {
    file_type_access: {
        aliases: [
            {
                name: "Plain Text (Microsoft Access)",
                extensions: [
                    "adn",
                    "accdb",
                    "accdr",
                    "accdt",
                    "accda",
                    "mdw",
                    "accde",
                    "mam",
                    "maq",
                    "mar",
                    "mat",
                    "maf",
                    "laccdb"
                ],
                base: "text.plain",
                scope: "text.plain.access"
            }
        ]
    },
    file_type_actionscript: {
        syntaxes: [
            {
                name: "ActionScript",
                scope: "source.actionscript"
            }
        ]
    },
    file_type_ae: {
        aliases: [
            {
                name: "Plain Text (Adobe After Effects)",
                extensions: ["aep", "aet"],
                base: "text.plain",
                scope: "text.plain.ae"
            }
        ]
    },
    file_type_ai: {
        aliases: [
            {
                name: "Plain Text (Adobe Illustrator)",
                extensions: ["ai"],
                base: "text.plain",
                scope: "text.plain.ai"
            }
        ]
    },
    file_type_angular: {
        syntaxes: [
            {
                name: "Angular​JS",
                scope: "text.html.basic.angularjs"
            }
        ]
    },
    file_type_apache: {
        syntaxes: [
            {
                name: "Apache Conf",
                scope: "source.apacheconf"
            }
        ]
    },
    file_type_applescript: {
        syntaxes: [
            {
                name: "AppleScript",
                scope: "source.applescript"
            }
        ]
    },
    file_type_archive: {
        aliases: [
            {
                name: "Plain Text (Archive)",
                extensions: [
                    "7z",
                    "7zip",
                    "gz",
                    "pzip",
                    "rar",
                    "saz",
                    "tar",
                    "tgz",
                    "wim",
                    "zip"
                ],
                base: "text.plain",
                scope: "text.plain.archive"
            }
        ]
    },
    file_type_audio: {
        aliases: [
            {
                name: "Plain Text (Audio)",
                extensions: [
                    "mp3",
                    "m4p",
                    "aac",
                    "aiff",
                    "au",
                    "flac",
                    "m4a",
                    "mpc",
                    "mp+",
                    "mpp",
                    "oga",
                    "opus",
                    "ra",
                    "rm",
                    "wav",
                    "wma"
                ],
                base: "text.plain",
                scope: "text.plain.audio"
            }
        ]
    },
    file_type_babel: {
        aliases: [
            {
                name: "JSON (Babel)",
                linter: "json",
                extensions: [".babelrc"],
                base: "source.json",
                scope: "source.json.babel"
            }
        ]
    },
    file_type_blade: {
        syntaxes: [
            {
                name: "Laravel Blade Highlighter",
                scope: "text.blade"
            }
        ]
    },
    file_type_bower: {
        aliases: [
            {
                name: "JSON (Bower)",
                linter: "json",
                extensions: ["bower.json", ".bowerrc"],
                base: "source.json",
                scope: "source.json.bower"
            }
        ]
    },
    file_type_c: {
        syntaxes: [
            {
                name: "C",
                scope: "source.c"
            },
            {
                name: "Objective-C",
                scope: "source.objc"
            }
        ]
    },
    file_type_circleci: {
        aliases: [
            {
                name: "YAML (CircleCI)",
                linter: "yaml",
                extensions: ["circle.yml"],
                base: "source.yaml",
                scope: "source.yaml.circleci"
            }
        ]
    },
    file_type_cf: {
        syntaxes: [
            {
                name: "ColdFusion",
                scope: "source.cfscript.cfc, text.html.cfm"
            },
            {
                name: "CFML",
                scope: "embedding.cfml, source.cfml.script"
            }
        ]
    },
    file_type_clojure: {
        syntaxes: [
            {
                name: "Clojure",
                scope: "source.clojure"
            }
        ]
    },
    file_type_cmake: {
        syntaxes: [
            {
                name: "CMake",
                scope: "source.cmake"
            },
            {
                name: "CMakeEditor",
                scope: "source.cmakeeditor"
            }
        ]
    },
    file_type_coffeescript: {
        syntaxes: [
            {
                name: "CoffeeScript",
                scope: "source.coffee"
            }
        ]
    },
    file_type_composer: {
        aliases: [
            {
                name: "JSON (Composer)",
                linter: "json",
                extensions: ["composer.json", "composer.lock"],
                base: "source.json",
                scope: "source.json.composer"
            }
        ]
    },
    file_type_cpp: {
        syntaxes: [
            {
                name: "C++",
                scope: "source.c++"
            },
            {
                name: "Objective C++",
                scope: "source.objc++"
            }
        ]
    },
    "file_type_c++": {
        syntaxes: [
            {
                name: "C++",
                scope: "source.c++"
            },
            {
                name: "Objective C++",
                scope: "source.objc++"
            }
        ]
    },
    file_type_csharp: {
        syntaxes: [
            {
                name: "C#",
                scope: "source.cs"
            }
        ]
    },
    "file_type_c#": {
        syntaxes: [
            {
                name: "C#",
                scope: "source.cs"
            }
        ]
    },
    file_type_css: {
        syntaxes: [
            {
                name: "CSS",
                scope: "source.css"
            }
        ]
    },
    file_type_csv: {
        aliases: [
            {
                name: "Plain Text (CSV)",
                extensions: ["csv"],
                base: "text.plain",
                scope: "text.csv"
            }
        ],
        syntaxes: [
            {
                name: "Advanced CSV",
                scope: "text.advanced_csv"
            }
        ]
    },
    file_type_cython: {
        syntaxes: [
            {
                name: "Cython",
                scope: "source.cython"
            }
        ]
    },
    file_type_dart: {
        syntaxes: [
            {
                name: "Dart",
                scope: "source.dart"
            }
        ]
    },
    file_type_delphi: {
        syntaxes: [
            {
                name: "Pascal",
                scope: "source.pascal"
            }
        ]
    },
    file_type_dlang: {
        syntaxes: [
            {
                name: "D",
                scope: "source.d"
            }
        ]
    },
    file_type_diff: {
        syntaxes: [
            {
                name: "Diff",
                scope: "source.diff"
            }
        ]
    },
    file_type_docker: {
        syntaxes: [
            {
                name: "Dockerfile",
                scope: "source.dockerfile"
            }
        ],
        aliases: [
            {
                name: "YAML (Docker)",
                linter: "yaml",
                extensions: ["docker-compose.yml"],
                base: "source.yaml",
                scope: "source.yaml.docker"
            },
            {
                name: "Shell Script (Docker)",
                extensions: [".dockerignore"],
                base: "source.shell",
                scope: "source.shell.docker"
            }
        ]
    },
    file_type_dotnet: {
        syntaxes: [
            {
                name: "ASP",
                scope: "source.asp"
            },
            {
                name: "HTML (ASP)",
                scope: "text.html.asp"
            }
        ]
    },
    file_type_editorconfig: {
        syntaxes: [
            {
                name: "EditorConfig",
                scope: "source.ini.editorconfig"
            }
        ]
    },
    file_type_elm: {
        syntaxes: [
            {
                name: "Elm",
                scope: "source.elm"
            }
        ]
    },
    file_type_erlang: {
        syntaxes: [
            {
                name: "Erlang",
                scope: "source.erlang"
            }
        ]
    },
    file_type_eslint: {
        aliases: [
            {
                name: "JSON (ESLint)",
                linter: "json",
                extensions: [".eslintrc", ".eslintrc.json"],
                base: "source.json",
                scope: "source.json.eslint"
            },
            {
                name: "JavaScript (ESLint)",
                linter: "javascript",
                extensions: [".eslintrc.js"],
                base: "source.js",
                scope: "source.js.eslint"
            },
            {
                name: "YAML (ESLint)",
                linter: "yaml",
                extensions: [".eslintrc.yaml", ".eslintrc.yml"],
                base: "source.yaml",
                scope: "source.yaml.eslint"
            },
            {
                name: "Shell Script (ESLint)",
                extensions: [".eslintignore"],
                base: "source.shell",
                scope: "source.shell.eslint"
            },
            {
                name: "Plain Text (ESLint)",
                extensions: [".eslintcache"],
                base: "text.plain",
                scope: "text.plain.eslint"
            }
        ]
    },
    file_type_ex: {
        syntaxes: [
            {
                name: "Elixir",
                scope: "source.elixir, text.html.elixir"
            }
        ]
    },
    file_type_excel: {
        aliases: [
            {
                name: "Plain Text (Microsoft Excel)",
                extensions: ["xls", "xlsx", "xlsm", "xlsb", "xlt"],
                base: "text.plain",
                scope: "text.plain.excel"
            }
        ]
    },
    file_type_font: {
        aliases: [
            {
                name: "Plain Text (Font)",
                extensions: ["eot", "otf", "ttf", "woff", "woff2"],
                base: "text.plain",
                scope: "text.plain.font"
            }
        ]
    },
    file_type_git: {
        syntaxes: [
            {
                name: "Git Formats",
                scope: "text.git"
            },
            {
                name: "Git Misc Packages",
                scope: "source.git"
            },
            {
                name: "Shell Script (Git)",
                scope: "source.shell.git"
            }
        ],
        aliases: [
            {
                name: "Git Keep",
                extensions: [
                    ".gitkeep",
                    "source.git",
                    "source.shell.git",
                    "text.git",
                    "text.git.keep"
                ],
                base: "text.plain",
                scope: "text.git.keep, source.git, source.shell.git, text.git, text.git.keep"
            }
        ]
    },
    file_type_go: {
        syntaxes: [
            {
                name: "Go",
                scope: "source.go"
            }
        ]
    },
    file_type_gradle: {
        syntaxes: [
            {
                name: "Gradle_Language",
                scope: "source.gradle"
            }
        ],
        aliases: [
            {
                name: "Groovy (Gradle)",
                extensions: ["gradle"],
                base: "source.groovy",
                scope: "source.groovy.gradle"
            }
        ]
    },
    file_type_graphviz: {
        syntaxes: [
            {
                name: "Graphviz (DOT)",
                scope: "source.dot"
            }
        ]
    },
    file_type_groovy: {
        syntaxes: [
            {
                name: "Groovy",
                scope: "source.groovy"
            }
        ]
    },
    file_type_gruntfile: {
        aliases: [
            {
                name: "JavaScript (Gruntfile)",
                linter: "javascript",
                extensions: ["gruntfile.js"],
                base: "source.js",
                scope: "source.js.gruntfile"
            }
        ]
    },
    file_type_gulpfile: {
        aliases: [
            {
                name: "JavaScript (Gulpfile)",
                linter: "javascript",
                extensions: ["gulpfile.js", "gulpfile.babel.js"],
                base: "source.js",
                scope: "source.js.gulpfile"
            },
            {
                name: "CoffeeScript (Gulpfile)",
                linter: "coffeescript",
                extensions: ["gulpfile.coffee"],
                base: "source.coffee",
                scope: "source.coffee.gulpfile"
            }
        ]
    },
    file_type_haml: {
        syntaxes: [
            {
                name: "Ruby Haml",
                scope: "text.haml"
            }
        ]
    },
    file_type_haskell: {
        syntaxes: [
            {
                name: "Haskell",
                scope: "source.haskell"
            }
        ]
    },
    file_type_haxe: {
        syntaxes: [
            {
                name: "Haxe",
                scope: "source.haxe"
            }
        ]
    },
    file_type_html: {
        syntaxes: [
            {
                name: "HTML",
                scope: "text.html.basic"
            }
        ]
    },
    file_type_indesign: {
        aliases: [
            {
                name: "Plain Text (Adobe InDesign)",
                extensions: ["indd", "indl", "indt", "indb", "inx", "idml"],
                base: "text.plain",
                scope: "text.plain.indesign"
            }
        ]
    },
    file_type_java: {
        syntaxes: [
            {
                name: "Java",
                scope: "source.java"
            }
        ]
    },
    file_type_js: {
        syntaxes: [
            {
                name: "JavaScript",
                scope: "source.js"
            }
        ]
    },
    file_type_json: {
        syntaxes: [
            {
                name: "JSON",
                scope: "source.json"
            }
        ]
    },
    file_type_jsp: {
        syntaxes: [
            {
                name: "JSP",
                scope: "text.html.jsp"
            }
        ]
    },
    file_type_jsx: {
        syntaxes: [
            {
                name: "JSX",
                scope: "source.js.jsx"
            },
            {
                name: "JS Custom - React",
                scope: "source.js.react"
            }
        ]
    },
    file_type_julia: {
        syntaxes: [
            {
                name: "Julia",
                scope: "source.julia"
            }
        ]
    },
    file_type_kotlin: {
        syntaxes: [
            {
                name: "Kotlin",
                scope: "source.Kotlin"
            }
        ]
    },
    file_type_less: {
        syntaxes: [
            {
                name: "LESS",
                scope: "source.less"
            }
        ]
    },
    file_type_license: {
        aliases: [
            {
                name: "Plain Text (License)",
                extensions: ["copying", "copyright", "license"],
                base: "text.plain",
                scope: "text.plain.license"
            },
            {
                name: "Markdown (License)",
                extensions: ["copying.md", "copyright.md", "license.md"],
                base: "text.html.markdown",
                scope: "text.html.markdown.license"
            }
        ]
    },
    file_type_liquid: {
        syntaxes: [
            {
                name: "Siteleaf Liquid Syntax",
                scope: "text.html.liquid"
            }
        ]
    },
    file_type_lisp: {
        syntaxes: [
            {
                name: "Lisp",
                scope: "source.lisp"
            }
        ]
    },
    file_type_lock: {
        aliases: [
            {
                name: "YAML (Lock)",
                linter: "yaml",
                extensions: ["Gemfile.lock", "Berksfile.lock"],
                base: "source.yaml",
                scope: "source.yaml.lock"
            }
        ]
    },
    file_type_log: {
        aliases: [
            {
                name: "Plain Text (Log)",
                extensions: ["log"],
                base: "text.plain",
                scope: "text.plain.log"
            }
        ]
    },
    file_type_lsl: {
        syntaxes: [
            {
                name: "LSL",
                scope: "source.lsl, source.ossl"
            }
        ]
    },
    file_type_lua: {
        syntaxes: [
            {
                name: "Lua",
                scope: "source.lua"
            }
        ]
    },
    file_type_markdown: {
        syntaxes: [
            {
                name: "Markdown",
                scope: "text.html.markdown"
            }
        ]
    },
    file_type_matlab: {
        syntaxes: [
            {
                name: "MATLAB",
                scope: "source.matlab"
            }
        ]
    },
    file_type_maya: {
        syntaxes: [
            {
                name: "MEL",
                scope: "source.mel"
            }
        ]
    },
    file_type_mustache: {
        syntaxes: [
            {
                name: "HTML Mustache",
                scope: "txt.html.mustache, text.html.hgn"
            },
            {
                name: "Handlebars",
                scope: "text.html.handlebars"
            },
            {
                name: "Hamlbars",
                scope: "source.hamlbars"
            }
        ]
    },
    file_type_nginx: {
        syntaxes: [
            {
                name: "nginx",
                scope: "source.nginx"
            }
        ]
    },
    file_type_nodejs: {
        aliases: [
            {
                name: "Plain Text (NodeJS)",
                extensions: [".node-version", ".nvmrc"],
                base: "text.plain",
                scope: "text.plain.nodejs"
            }
        ]
    },
    file_type_note: {
        syntaxes: [
            {
                name: "PlainNotes",
                scope: "text.html.markdown.note"
            }
        ]
    },
    file_type_npm: {
        aliases: [
            {
                name: "Shell Script (NPM)",
                extensions: [".npmignore", ".npmrc"],
                base: "source.shell",
                scope: "source.shell.npm"
            },
            {
                name: "JSON (NPM)",
                linter: "json",
                extensions: ["package-lock.json", "package.json"],
                base: "source.json",
                scope: "source.json.npm"
            }
        ]
    },
    file_type_nsis: {
        syntaxes: [
            {
                name: "NSIS",
                scope: "source.nsis"
            }
        ]
    },
    file_type_ocaml: {
        syntaxes: [
            {
                name: "OCaml",
                scope:
                    "source.ocaml, source.ocamllex, source.ocamlyacc, source.camlp4.ocaml"
            }
        ]
    },
    file_type_onenote: {
        aliases: [
            {
                name: "Plain Text (Microsoft OneNote)",
                extensions: ["one"],
                base: "text.plain",
                scope: "text.plain.onenote"
            }
        ]
    },
    file_type_pdf: {
        aliases: [
            {
                name: "Plain Text (PDF)",
                extensions: ["pdf"],
                base: "text.plain",
                scope: "text.plain.pdf"
            }
        ]
    },
    file_type_perl: {
        syntaxes: [
            {
                name: "Perl",
                scope: "source.perl"
            }
        ]
    },
    file_type_php: {
        syntaxes: [
            {
                name: "PHP",
                scope: "embedding.php, source.php"
            }
        ]
    },
    file_type_plist: {
        syntaxes: [
            {
                name: "plist",
                scope: "text.plist"
            }
        ]
    },
    file_type_postcss: {
        syntaxes: [
            {
                name: "Syntax Highlighting for Post​CSS",
                scope: "source.postcss"
            }
        ],
        aliases: [
            {
                name: "JSON (PostCSS)",
                linter: "json",
                extensions: [".postcssrc"],
                base: "source.json",
                scope: "source.json.postcss"
            },
            {
                name: "JavaScript (PostCSS)",
                linter: "javascript",
                extensions: ["postcss.config.js"],
                base: "source.js",
                scope: "source.js.postcss"
            }
        ]
    },
    file_type_powerpoint: {
        aliases: [
            {
                name: "Plain Text (Microsoft PowerPoint)",
                extensions: ["ppt", "pptx", "pps", "ppsx"],
                base: "text.plain",
                scope: "text.plain.powerpoint"
            }
        ]
    },
    file_type_powershell: {
        syntaxes: [
            {
                name: "PowerShell",
                scope: "source.powershell"
            }
        ]
    },
    file_type_premiere: {
        aliases: [
            {
                name: "Plain Text (Adobe Premiere Pro)",
                extensions: ["prel", "prproj", "psq"],
                base: "text.plain",
                scope: "text.plain.premiere"
            }
        ]
    },
    file_type_procfile: {
        aliases: [
            {
                name: "YAML (Procfile)",
                linter: "yaml",
                extensions: ["Procfile"],
                base: "source.yaml",
                scope: "source.yaml.procfile"
            },
            {
                name: "Plain Text (Buildpacks)",
                extensions: [".buildpacks"],
                base: "text.plain",
                scope: "text.plain.buildpacks"
            }
        ]
    },
    file_type_psd: {
        aliases: [
            {
                name: "Plain Text (Adobe Photoshop)",
                extensions: ["psb", "psd"],
                base: "text.plain",
                scope: "text.plain.ps"
            }
        ]
    },
    file_type_pug: {
        syntaxes: [
            {
                name: "Jade",
                scope: "text.jade"
            },
            {
                name: "Pug",
                scope: "text.pug"
            }
        ],
        aliases: [
            {
                name: "JSON (Puglint)",
                linter: "json",
                extensions: [".pug-lintrc", ".pug-lintrc.json"],
                base: "source.json",
                scope: "source.json.puglint"
            },
            {
                name: "JavaScript (Puglint)",
                linter: "javascript",
                extensions: [".pug-lintrc.js"],
                base: "source.js",
                scope: "source.js.puglint"
            }
        ]
    },
    file_type_puppet: {
        syntaxes: [
            {
                name: "Puppet",
                scope: "source.puppet"
            }
        ]
    },
    file_type_python: {
        syntaxes: [
            {
                name: "Python",
                scope: "source.python"
            }
        ]
    },
    file_type_r: {
        syntaxes: [
            {
                name: "R",
                scope: "source.r"
            }
        ]
    },
    file_type_rails: {
        syntaxes: [
            {
                name: "Rails",
                scope: "source.ruby.rails, text.html.ruby"
            }
        ]
    },
    file_type_registry: {
        aliases: [
            {
                name: "Registry (REG)",
                extensions: ["reg"],
                base: "source.ini",
                scope: "source.reg"
            }
        ]
    },
    file_type_restructuredtext: {
        syntaxes: [
            {
                name: "reStructuredText",
                scope: "text.restructuredtext"
            }
        ]
    },
    file_type_riot: {
        syntaxes: [
            {
                name: "Riot (Jade/Pug)",
                scope: "source.jade.riot"
            },
            {
                name: "Riot (HTML)",
                scope: "text.html.riot"
            }
        ]
    },
    file_type_ruby: {
        syntaxes: [
            {
                name: "Ruby",
                scope: "source.ruby"
            }
        ],
        aliases: [
            {
                name: "Shell Script (Ruby)",
                extensions: [".rvmrc"],
                base: "source.shell",
                scope: "source.shell.ruby"
            },
            {
                name: "Plain Text (Ruby)",
                extensions: [".ruby-version", ".ruby-gemset", ".rspec"],
                base: "text.plain",
                scope: "text.plain.ruby"
            }
        ]
    },
    file_type_rust: {
        syntaxes: [
            {
                name: "Rust",
                scope: "source.rust"
            }
        ]
    },
    file_type_sass: {
        syntaxes: [
            {
                name: "Sass",
                scope: "source.sass"
            }
        ]
    },
    file_type_scala: {
        syntaxes: [
            {
                name: "Scala",
                scope: "source.scala"
            }
        ]
    },
    file_type_scss: {
        syntaxes: [
            {
                name: "SCSS",
                scope: "source.scss"
            }
        ]
    },
    file_type_settings: {
        syntaxes: [
            {
                name: "INI",
                scope: "source.ini"
            },
            {
                name: "Dot​ENV",
                scope: "source.env"
            }
        ],
        aliases: [
            {
                name: "JSON (Settings)",
                linter: "json",
                extensions: [".jshintrc", ".jsbeautifyrc"],
                base: "source.json",
                scope: "source.json.settings"
            },
            {
                name: "XML (Config)",
                linter: "xml",
                extensions: ["config"],
                base: "text.xml",
                scope: "text.xml.config"
            }
        ]
    },
    file_type_shell: {
        syntaxes: [
            {
                name: "Shell Script (Bash)",
                scope: "source.shell"
            },
            {
                name: "Shell Script (Fish)",
                scope: "source.fish"
            }
        ]
    },
    file_type_sketch: {
        aliases: [
            {
                name: "Plain Text (Sketch)",
                extensions: ["sketch"],
                base: "text.plain",
                scope: "text.plain.sketch"
            }
        ]
    },
    file_type_slim: {
        syntaxes: [
            {
                name: "Ruby Slim",
                scope: "text.slim"
            }
        ]
    },
    file_type_sql: {
        syntaxes: [
            {
                name: "SQL",
                scope: "source.sql"
            }
        ]
    },
    file_type_stata: {
        syntaxes: [
            {
                name: "Stata",
                scope: "source.stata"
            }
        ]
    },
    file_type_stylelint: {
        aliases: [
            {
                name: "JSON (Stylelint)",
                linter: "json",
                extensions: [".stylelintrc", ".stylelintrc.json"],
                base: "source.json",
                scope: "source.json.stylelint"
            },
            {
                name: "JavaScript (Stylelint)",
                linter: "javascript",
                extensions: [".stylelintrc.js", "stylelint.config.js"],
                base: "source.js",
                scope: "source.js.stylelint"
            },
            {
                name: "YAML (Stylelint)",
                linter: "yaml",
                extensions: [".stylelintrc.yaml", ".stylelintrc.yml"],
                base: "source.yaml",
                scope: "source.yaml.stylelint"
            },
            {
                name: "Shell Script (Stylelint)",
                extensions: [".stylelintignore"],
                base: "source.shell",
                scope: "source.shell.stylelint"
            }
        ]
    },
    file_type_stylus: {
        syntaxes: [
            {
                name: "Stylus",
                scope: "source.stylus"
            }
        ]
    },
    file_type_sublime: {
        syntaxes: [
            {
                name: "Sublime Text Key Map",
                scope: "source.sublimekeymap"
            },
            {
                name: "Sublime Settings",
                scope: "source.sublime-settings"
            }
        ],
        aliases: [
            {
                name: "JSON (Sublime)",
                linter: "json",
                extensions: [
                    ".no-sublime-package",
                    "hidden-theme",
                    "sublime-commands",
                    "sublime-menu",
                    "sublime-project",
                    "sublime-settings",
                    "sublime-theme",
                    "sublime-workspace",
                    "sublime-keymap",
                    "sublime-mousemap"
                ],
                base: "source.json",
                scope: "source.sublimekeymap, source.sublime-settings, source.json.sublime"
            },
            {
                name: "YAML (Sublime)",
                extensions: ["sublime-syntax"],
                base: "source.yaml",
                scope: "source.yaml.sublime"
            }
        ]
    },
    file_type_svelte: {
        syntaxes: [
            {
                name: "Svelte",
                scope: "text.html.svelte"
            }
        ]
    },
    file_type_svg: {
        aliases: [
            {
                name: "XML (SVG)",
                linter: "xml",
                extensions: ["svg"],
                base: "text.xml",
                scope: "text.xml.svg"
            }
        ]
    },
    file_type_swift: {
        syntaxes: [
            {
                name: "Swift",
                scope: "source.swift"
            }
        ]
    },
    file_type_tcl: {
        syntaxes: [
            {
                name: "Tcl",
                scope: "source.tcl"
            }
        ]
    },
    file_type_tern: {
        aliases: [
            {
                name: "JSON (Tern JS)",
                linter: "json",
                extensions: [".tern-project", ".tern-config"],
                base: "source.json",
                scope: "source.json.tern"
            }
        ]
    },
    file_type_terraform: {
        syntaxes: [
            {
                name: "Terraform",
                scope: "source.terraform"
            }
        ]
    },
    file_type_tex: {
        syntaxes: [
            {
                name: "LaTeX",
                scope: "text.tex, text.biblatex, text.bibtex, text.log.latex"
            }
        ]
    },
    file_type_textile: {
        syntaxes: [
            {
                name: "Textile",
                scope: "text.html.textile"
            }
        ]
    },
    file_type_todo: {
        syntaxes: [
            {
                name: "PlainTasks",
                scope: "text.todo"
            }
        ]
    },
    file_type_twig: {
        syntaxes: [
            {
                name: "PHP-Twig",
                scope: "text.html.twig"
            }
        ]
    },
    file_type_typescript: {
        syntaxes: [
            {
                name: "TypeScript",
                scope: "source.ts"
            }
        ]
    },
    file_type_unity3d: {
        syntaxes: [
            {
                name: "Boo (Unity 3D)",
                scope: "source.boo.unity3d"
            },
            {
                name: "C# (Unity 3D)",
                scope: "source.cs.unity3d"
            },
            {
                name: "JavaScript (Unity 3D)",
                scope: "source.js.unity3d"
            },
            {
                name: "Shader (Unity 3D)",
                scope: "source.shader"
            }
        ]
    },
    file_type_vhdl: {
        syntaxes: [
            {
                name: "VHDL",
                scope: "source.vhdl"
            },
            {
                name: "SystemVerilog",
                scope: "source.systemverilog"
            },
            {
                name: "Verilog",
                scope: "source.verilog"
            }
        ]
    },
    file_type_video: {
        aliases: [
            {
                name: "Plain Text (Video)",
                extensions: [
                    "avi",
                    "mp4",
                    "mov",
                    "mkv",
                    "h264",
                    "webm",
                    "wmv",
                    "ogv",
                    "ogg",
                    "3gp",
                    "m4v",
                    "mpg",
                    "mpeg",
                    "3gpp",
                    "ogm"
                ],
                base: "text.plain",
                scope: "text.plain.video"
            }
        ]
    },
    file_type_vim: {
        syntaxes: [
            {
                name: "VimL",
                scope: "source.viml"
            }
        ],
        aliases: [
            {
                name: "Vimrc (VimL)",
                extensions: [".vimrc", ".gvimrc", "_vimrc", "_gvimrc"],
                base: "source.viml",
                scope: "source.viml.vimrc"
            }
        ]
    },
    file_type_visualstudio: {
        aliases: [
            {
                name: "Plain Text (Visual Studio)",
                extensions: ["idl", "sln"],
                base: "text.plain",
                scope: "text.plain.visualstudio"
            },
            {
                name: "XML (Visual Studio)",
                extensions: [
                    "csproj",
                    "fsproj",
                    "shproj",
                    "sqlproj",
                    "vbproj",
                    "vcxproj",
                    "vsproj",
                    "props",
                    "ruleset",
                    "settings",
                    "targets"
                ],
                base: "text.xml",
                scope: "text.xml.visualstudio"
            }
        ]
    },
    file_type_vue: {
        syntaxes: [
            {
                name: "Vue Syntax Highlight",
                scope: "text.html.vue"
            }
        ]
    },
    file_type_webpack: {
        aliases: [
            {
                name: "JavaScript (Webpack)",
                linter: "javascript",
                extensions: [
                    "webpack.config.js",
                    "webpack.config.babel.js",
                    "webpack.mix.js"
                ],
                base: "source.js",
                scope: "source.js.webpack"
            }
        ]
    },
    file_type_windows: {
        syntaxes: [
            {
                name: "Batch File",
                scope: "source.dosbatch"
            }
        ],
        aliases: [
            {
                name: "Plain Text (Windows Shortcut)",
                extensions: ["lnk"],
                base: "text.plain",
                scope: "text.plain.lnk"
            }
        ]
    },
    file_type_word: {
        aliases: [
            {
                name: "Plain Text (Microsoft Word)",
                extensions: [
                    "doc",
                    "docx",
                    "docm",
                    "docxml",
                    "dotm",
                    "dotx",
                    "wri"
                ],
                base: "text.plain",
                scope: "text.plain.word"
            }
        ]
    },
    file_type_yaml: {
        syntaxes: [
            {
                name: "YAML",
                scope: "source.yaml"
            }
        ]
    },
    file_type_yarn: {
        aliases: [
            {
                name: "YAML (Yarn)",
                linter: "yaml",
                extensions: ["yarn.lock"],
                base: "source.yaml",
                scope: "source.yaml.yarn"
            }
        ]
    }
}
