npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ayanberke/deneme-vue.git main:gh-pages

cd -