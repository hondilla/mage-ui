import { defineRollupSwcOption, swc } from 'rollup-plugin-swc3'
import preserveDirectives from 'rollup-preserve-directives'

export default {
  input: './src/index.ts',
  watch: {
    include: 'src/**/*'
  },
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@pandacss/dev',
    '@mage/ui-lib/css',
    '@mage/ui-lib/jsx',
    '@mage/ui-lib/recipes',
  ],
  output: {
    dir: 'dist',
    preserveModules: true,
    sourcemap: true
  },
  plugins: [
    swc(
      defineRollupSwcOption({
        minify: false,
        jsc: {
          minify: {
            format: {
              comments: 'all'
            },
            sourceMap: true
          }
        },
        sourceMaps: true
      })
    ),
    preserveDirectives()
  ]
}
