## はじめに
こちらは**TypeScript × Next.js × MySQL(PlanetScale) × Vercel使用したAIチャットアプリ**の要件定義から設計、実装、テスト、デプロイまでの工程の記事になります。

## 要件定義

https://qiita.com/Hirohana/private/4b72ac70b7d586ee3467

## 設計

### 基本設計書

https://docs.google.com/spreadsheets/d/1CaEYpo63_ZErxHsBcYjjeDAubjlEnlsQf4aDjWUiXfc/edit#gid=504408866

### 詳細設計書

https://docs.google.com/spreadsheets/d/1k99nM7nl8YnWQr6PQr_8dC9qfJ1YQfQWG_LtDHIqQjQ/edit#gid=0

## 実装

### 環境構築
https://qiita.com/Hirohana/items/6040cb0be9dfcabc3cbf

### Tailwind CSS
https://qiita.com/Hirohana/items/2a33c96cbdf494958a2e

### React Icons
https://zenn.dev/taichifukumoto/articles/how-to-use-react-icons

### Next.js基礎
https://reffect.co.jp/react/next-js-13/

### ディレクトリ構成
https://zenn.dev/yodaka/articles/eca2d4bf552aeb

https://zenn.dev/necscat/articles/d5d9b7a3f859d7

### 認証
https://qiita.com/Hirohana/items/e3b71af64311e26582a6

### ユーザー情報が取得できなかった場合に "/" にリダイレクト
* Next.jsのドキュメントのリダイレクト関数を使用して解決。

https://nextjs.org/docs/app/api-reference/functions/redirect


### 状態管理
https://qiita.com/Hirohana/items/43e4d665bbe04577135a

https://reffect.co.jp/react/redux-toolkit/

https://blog.wh-plus.co.jp/entry/2021/12/9/000000

### DB(PlanetScaleのMySQL)
https://app.planetscale.com/hiro-hanatubure/chatgptdb

https://note.com/shift_tech/n/n9a6d2a6a0854

#### DB(PlanetScale)のデータ挿入時の文字化け問題
https://my-web-note.com/mysql-mariadb-japanese-garbled-text/

https://togeonet.co.jp/post-13850

Windows11のシステムスケールをSHIFT-JISからUTF-8に変更することで文字化けが直った。

### DBにAIとの会話履歴を最初に保存する際にuuidを使って一意のタイトルを付けるためにuuidを使用

#### UUIDの作り方と定義

<details><summary>uuidとは</summary>

UUID（Universally Unique Identifier）は、128ビット（16バイト）の値で表される識別子です。先頭から4ビットごとに16進数の値（0～F）に変換し、5つのグループに区切って表現します。

正確な形式は次のとおりです：
「XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX」

ここで、各「X」は4ビット（1つの16進数文字）を表し、合計で32文字の16進数表現が含まれます。区切り文字としてハイフン（-）を使用して、5つのグループに分けられます。

なお、それぞれの4ビット（4桁の2進数）が16進数に変換されることにより、16進数文字が得られます。例えば、0000は0、0001は1、0010は2、…、1111はFになります。

この形式によって、UUIDはランダム性が高く、全世界で一意の値を持つことが保証されます。UUIDは、データベースのレコードやファイルの名前、識別子の生成などさまざまな場面で利用されます。

https://mebee.info/2022/07/19/post-61487/

</details>



### Googleアカウントユーザー登録
https://gakogako.com/planetscale/

https://dev.classmethod.jp/articles/nextjs-planetscale-tutorial/

https://zenn.dev/tak_iwamoto/articles/b27151d22d9e6a

### OpenAIのAPIを利用するためのキーをJWTでcookieに保存
https://qiita.com/Hirohana/items/aa8651a520cdbbb68046

https://qiita.com/knaot0/items/8427918564400968bd2b

https://qiita.com/sa9ra4ma/items/67edf18067eb64a0bf40

https://nextjs.org/docs/app/api-reference/functions/cookies

### コンポーネント

#### ハンバーガーメニュー
https://okalog.info/tailwind-drawer/

#### モーダルウィンドウとオーバーレイ
https://reffect.co.jp/react/react-modal/

https://qiita.com/Hirohana/private/aeb116804c5fe4f6e8d4

## チートシート一覧
https://qiita.com/Hirohana/private/f0c2459234302cca7f5d

## クリーンコード
https://qiita.com/Hirohana/private/e3d6f63ea923ab04ea92

## エラーログ関連
### ログ取得の目的と種類
![スクリーンショット (276).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1220815/25c1c388-e81a-7993-3523-7920af827950.png)
![スクリーンショット (277).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1220815/ce676612-f77b-a511-dff0-9795348b8af2.png)


## テスト

### 単体テスト仕様書

### 結合テスト仕様書

## デプロイ

### Vercelのサーバーレス関数の実行タイムアウトは無料版だと10秒なのでそれ以上超えるとエラーが発生する。

https://vercel.com/docs/concepts/limits/overview

## まとめ

## おわりに

## 参考
https://notepm.jp/template/requirement-definition

https://qiita.com/syantien/items/9a8a7cbaeca2be3ef0d7

https://www.udemy.com/course/react-complete-guide/learn/lecture/33043986?start=420#notes

https://www.udemy.com/course/javascript-complete/learn/lecture/32338436?start=150#notes

https://www.udemy.com/course/clean-code-tutorial/learn/lecture/34443972?start=0#overview

https://www.udemy.com/course/laravel-multi-ec/learn/lecture/26460890?start=15#overview
