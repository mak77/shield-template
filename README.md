# Shield Study Consent Pages, for use on amo static sites.

Use information about the study to make a CONSENT PAGE for your study.

This page will be HOSTED ON `addons.mozilla.org`, and have a URL like <https://addons.mozilla.org/en-US/firefox/shield_study_4>


## Steps and Usage

You got this!  Let's get started in making our patch against `mozilla/addons-server` for the new page.

0.  Put the Firefox Strategy and Insights Team on speed dial, to help with any questions.

1.  Gather all this information

    - a STUDY NUMBER (example:  5)
    - the amo id of your addon:  `site-enhance-shield-study`
    - the DIRECT download url.  It should have `downloads/latest/your-addon-id/` in it.  This url will be LIVE after a *public* full review of the addon.
    - legal text for the consent page.

2.  Install all dependencies

    `npm install`

3.  Edit `data.js` to have

    - title: 'Enhance Websites',
    - xpi: 'https://addons.mozilla.org/firefox/downloads/latest/site-enhance-shield-study/?src=shield-study-4',
    - buttonText: 'Try Site Enhance'

4.  Edit `copy.md` with the CONSENT TEXT as

    - **approved by Legal**
    - **approved by Weird Science**

5.  `npm run compile` => `dist` directory with a compiled template (site).

6.  TEST IT!

    ```npm test```

7.  Turn into an AMO patch (see mozilla/addons-server#3271)

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
