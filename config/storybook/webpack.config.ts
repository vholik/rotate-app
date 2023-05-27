import path from 'path'

import { type RuleSetRule, type Configuration, DefinePlugin } from 'webpack'

import { type BuildPaths } from '../build/types/config'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config!.resolve!.modules!.push(paths.src)
    config!.resolve!.extensions!.push('.ts', '.tsx')

    // @ts-expect-error: rule error
    config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    config!.module!.rules.push(buildCssLoaders(true))

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        })
    )

    return config
}
