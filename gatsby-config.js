module.exports = {
    siteMetadata: {
        title: 'PolishCodeGirl gatsby starter',
        description: 'This is show of page to practise gatsby'
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js')
                }
            }
        }
    ]
}