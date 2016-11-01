# Shield Study Consent Pages, to be hosted on the AMO site.

Use information about the study to make a CONSENT PAGE for your study.

This page will be HOSTED ON `addons.mozilla.org`, and have a URL like <https://addons.mozilla.org/en-US/firefox/shield_study_4>

## Steps and Usage

You got this!  Let's get started in making our patch against `mozilla/addons-server` for the new page.

0.  Put the [Firefox Strategy and Insights Team on speed dial](https://mozilla.github.io/shield-studies-docs/contact/), to help with any questions

1.  Gather all this information

    - a STUDY NUMBER (example:  5)
    - the amo id of your addon:  `some-feature-shield-study`
    - the DIRECT download url.  It should have `downloads/latest/your-addon-id/` in it.  Note: This url will not be LIVE until a full review of the  **public addon**.
    - legal text (copy) for the consent page.

2.  Install all dependencies

    `npm install`

3.  Edit `data.js` to have correct data.

    (Assuming this is **Study #5**, with addon id: **some-feature-shield-study**.)

    - title: 'Enhance Websites',
    - xpi: 'https://addons.mozilla.org/firefox/downloads/latest/some-feature-shield-study/?src=shield-study-5',
    - buttonText: 'Try Some Feature'

4.  Edit `copy.md` with the CONSENT TEXT as

    - **approved by Legal**
    - **approved by Weird Science**
    - see: [process](https://mozilla.github.io/shield-studies-docs/study-process/#propopsed-process)

5.  `npm run compile` will create a `dist/` directory with the compiled site.

5.  `npm run compile` => `dist` directory with a compiled template (site).

6.  TEST IT!

    ```npm test```

7.  Make it into AMO site patch (see mozilla/addons-server#3271 )

    1.  clone addons-server to `addons-server`

        ```
        git clone https://github.com/mozilla/addons-server
        ```

    2.  reformat the built site into an amo patch

        ```
        $(cd addons-server && bash ../scripts/reformat-amo.sh ../dist/ shield_study_4)
        ```

    3.  Edit the routing and tests files to include your new page

        ```
        addons-server/src/olympia/pages/tests.py
        addons-server/src/olympia/pages/urls.py
        ```

    4.  Make a branch / PR similar against `mozilla/addons-server` like:  <https://github.com/mozilla/addons-server/pull/3271>
