// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-commonjs
var path = require("path");
const config = {
  projectName: 'JavaNorthMiniApp',
  date: '2020-1-6',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": 'babel-runtime'
      }]
    ]
  },
  plugins: [],
  defineConstants: {
    // 'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV),
  },
  copy: {
    patterns: [
      // { from: 'src/component/towxml', to: 'dist/component/towxml'},
      { from: 'src/wemark', to: 'dist/wemark' },
      // { from: 'src/wemark/parser.js', to: 'dist/wemark/parser.js'},
      // { from: 'src/wemark/prism.js', to: 'dist/wemark/prism.js'},
      // { from: 'src/wemark/prism.wxss', to: 'dist/wemark/prism.wxss'},
      // { from: 'src/wemark/remarkable.js', to: 'dist/wemark/remarkable.js'},
      // { from: 'src/wemark/richtext.js', to: 'dist/wemark/richtext.js'},
      // { from: 'src/wemark/wemark.js', to: 'dist/wemark/wemark.js'},
      // { from: 'src/wemark/wemark.json', to: 'dist/wemark/wemark.json'},
      // { from: 'src/wemark/wemark.wxml', to: 'dist/wemark/wemark.wxml'},
      // { from: 'src/wemark/wemark.wxss', to: 'dist/wemark/wemark.wxss'},



      // { from: 'src/components/wxParse/wxParse.wxml', to: 'dist/components/wxParse/wxParse.wxml'}
    ],
    options: {}
  },
  mini: {
    compile: {
      exclude: [
        path.resolve(__dirname, '..', 'src/wemark/remarkable.js')
      ]
    },
    postcss: {
      pxtransform: {
        enable: false,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  // 小程序端专用配置
  weapp: {
    compile: {
      exclude: [
        'src/wemark/remarkable.js',
      ]
    },
    postcss: {
      autoprefixer: {
        enable: true
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 10240
        }
      }
    },
    // 替换 JSX 中的属性名，参考：
    // https://github.com/NervJS/taro/issues/2077
    jsxAttributeNameReplace: {}
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
