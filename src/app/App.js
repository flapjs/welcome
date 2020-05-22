import React from 'react';
import { hot } from 'react-hot-loader/root';
import Style from './App.css';

import LogoIcon from './LogoIcon.js';
import CodeIcon from './CodeIcon.js';
import UpIcon from './UpIcon.js';

import Timeline from './Timeline.js';

import TypeWriter from './TypeWriter.js';
import { getRandomQuote } from './Quotes.js';

const LAUNCH_BUTTON_TEXT = "Launch Workspace";
const SMALL_LAUNCH_BUTTON_TEXT = "Get Started!";
const SMALLER_LAUNCH_BUTTON_TEXT = "Proceed.";
const SMALLEST_LAUNCH_BUTTON_TEXT = "pls";

const APP_LINK = "https://flapjs.github.io/FLAPJS-WebApp/";
const REPORT_BUG_LINK = "https://goo.gl/forms/XSil43Xl5xLHsa0E2";
const ABOUT_LINK = "https://github.com/flapjs/FLAPJS-WebApp/blob/master/README.md";
const HELP_LINK = "https://github.com/flapjs/FLAPJS-WebApp/blob/master/docs/HELP.md";
const GITHUB_LINK = "https://github.com/flapjs/FLAPJS-WebApp/";

const PROFESSORS = [
    { name: "Mia Minnes", link: "http://cseweb.ucsd.edu/~minnes/" }
];
const DEVELOPERS = [
    { name: "Jacob Chazen", link: "https://www.linkedin.com/in/jacob-chazen-62ab81148/" },
    { name: "Zijing Di", link: "https://github.com/dizidizidi" },
    { name: "Thai Gillespie", link: "" },
    { name: "Diana Issatayeva", link: "www.linkedin.com/in/dissatay" },
    { name: "Andrew Kuo", link: "https://www.linkedin.com/in/andrew-kuo-790243132/" },
    { name: "Yelitza Mendez", link: "" }
];
const CONTRIBUTORS = [
    { name: "Maya Bello", link: "https://www.linkedin.com/in/maya-bello-6b8637a7/" },
    { name: "Liron Borwick-Cooper", link: "" },
    { name: "Zexiang Chen", link: "" },
    { name: "Seth D'Agostino", link: "https://www.linkedin.com/in/seth-d-agostino-1209a0191/" },
    { name: "Jimmy Dang", link: "https://www.linkedin.com/in/jimmydang1/" },
    { name: "Ravneet Dhanjal", link: "https://github.com/rdhanjal5" },
    { name: "Lixuan Lang", link: "https://www.linkedin.com/in/lixuan-lang-3ba206143/" },
    { name: "David Osuna", link: "https://www.linkedin.com/in/osunadavid/" },
    { name: "Max Morehead", link: "https://github.com/moreheadm" },
    { name: "Noah Solomon", link: "https://www.linkedin.com/in/noah-solomon-9a8526129/" },
    { name: "Priyal Suneja", link: "https://www.linkedin.com/in/priyalsuneja/" },
    { name: "Will Xu", link: "https://linkedin.com/in/willxu1/" },
    { name: "Xuanqiang \"Erik\" Zhao", link: "https://www.linkedin.com/in/xuanqiang-zhao-364225153/" }
];

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this._typewriter = null;
        this._panelContainer = React.createRef();
        this._scrollBackground = false;

        this.state = {
            launchOption: ""
        };

        this.onScroll = this.onScroll.bind(this);
        this.onMOTDButton = this.onMOTDButton.bind(this);
        this.onLaunchButton = this.onLaunchButton.bind(this);
        this.onReturnHomeButton = this.onReturnHomeButton.bind(this);
        this.onReportBugButton = this.onReportBugButton.bind(this);
        this.onAboutButton = this.onAboutButton.bind(this);
        this.onHelpButton = this.onHelpButton.bind(this);
        this.onGithubButton = this.onGithubButton.bind(this);
    }

    //Override
    componentDidMount()
    {
        window.addEventListener('scroll', this.onScroll);
        this.initializeThemeColor();
    }

    //Override
    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.onScroll);
        if (this._typewriter) this._typewriter.stop();
    }

    initializeThemeColor()
    {
        const root = document.getElementById('root');
        if (typeof localStorage !== 'undefined') {
            const prefsColor = localStorage.getItem('prefs-color');
            if (prefsColor) {
                try {
                    const jsonData = JSON.parse(prefsColor);
                    const colorPrimaryKey = '--color-primary';
                    const colorAccentKey = '--color-accent';
                    if (colorPrimaryKey in jsonData) {
                        root.style.setProperty('--color-background', jsonData[colorPrimaryKey]);
                        root.style.setProperty('--color-background-dark', 'black');
                    }
                    if (colorAccentKey in jsonData) {
                        root.style.setProperty('--color-text-accent', 'gray');
                        root.style.setProperty('--color-text-accent-active', jsonData[colorAccentKey]);
                    }

                    console.log(root.style);
                }
                catch (e) { }
            }
        }
    }

    onScroll(e)
    {
        const position = window.scrollY;
        if (position > 100) {
            this._scrollBackground = true;
        }
        else {
            this._scrollBackground = false;
        }
    }

    onMOTDButton(e)
    {
        if (this._typewriter) this._typewriter.stop();

        const quote = getRandomQuote();
        this._typewriter = new TypeWriter(quote[0] + "\n" + quote[1]);
    }

    onLaunchButton(e)
    {
        let msg = "";
        if (this.state.launchOption && this.state.launchOption.length > 0) {
            msg = "?module=" + this.state.launchOption;
        }
        window.open(APP_LINK + msg, '_self');
    }

    onReturnHomeButton(e)
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    onReportBugButton(e)
    {
        const newTab = window.open(REPORT_BUG_LINK, '_blank');
        newTab.focus();
    }

    onAboutButton(e)
    {
        this._panelContainer.current.scrollBy({ left: 1, behavior: 'smooth' });
    }

    onHelpButton(e)
    {
        const newTab = window.open(HELP_LINK, '_blank');
        newTab.focus();
    }

    onGithubButton(e)
    {
        const newTab = window.open(GITHUB_LINK, '_blank');
        newTab.focus();
    }

    renderLaunchOption(option, label, enabled = true)
    {
        return (
            <a className={(!enabled ? " disabled " : "") +
                (this.state.launchOption === option ? " active " : "")}
                onClick={e =>
                {
                    if (enabled) this.setState({ launchOption: option });
                }}>
                {label}
            </a>
        );
    }

    renderCreditLink(link, label, enabled = true)
    {
        return (
            <a key={label + ":" + link}
                className={(!enabled ? " disabled " : "")}
                onClick={e => window.open(link, '_blank').focus()}>
                {label}
            </a>
        );
    }

    /** @override */
    render()
    {
        let launchText;

        //Smallest
        if (window.matchMedia("(max-width: 480px)").matches) {
            launchText = SMALLEST_LAUNCH_BUTTON_TEXT;
        }
        //Smaller
        else if (window.matchMedia("(max-width: 680px)").matches) {
            launchText = SMALLER_LAUNCH_BUTTON_TEXT;
        }
        //Small
        else if (window.matchMedia("(max-width: 960px)").matches) {
            launchText = SMALL_LAUNCH_BUTTON_TEXT;
        }
        //Default
        else {
            launchText = LAUNCH_BUTTON_TEXT;
        }

        let motdText;

        if (this._typewriter) motdText = this._typewriter.getDisplayText();

        const scrolling = this._scrollBackground;

        return (
            <div className={Style.document_container +
                " " + (scrolling ? " scrolling " : "")}>
                <span className="space"></span>
                <div className={Style.app_container}>
                    <div className="header_container">
                        <div className="header_bar">
                            <div className="logo_container">
                                <LogoIcon />
                                <label className="logo_label">{"Flap.js"}</label>
                            </div>
                            <div className="motd_container">
                                <button className="motd_button"
                                    disabled={this._typewriter}
                                    onClick={this.onMOTDButton}>
                                    {"._."}
                                </button>
                                <label className="motd_display">
                                    {motdText && motdText.split('\n').map((e, i) => <p key={i}>{e}</p>)}
                                </label>
                            </div>
                        </div>
                        <div className="header_content">
                            <span className="space"></span>
                            <div className="welcome_container">
                                <h2>Explore what it means to be <u>computable</u>.</h2>
                            </div>
                            <span className="space"></span>
                            <div className="launch_container">
                                <button className="launch_button"
                                    onClick={this.onLaunchButton}>
                                    <label>{launchText}</label>
                                </button>
                                <div className="launch_options">
                                    <span className="space"></span>
                                    <div className="launch_option_list">
                                        {this.renderLaunchOption("fsa2", "Finite Automata")}
                                        {this.renderLaunchOption("re", "Regular Expressions")}
                                        {this.renderLaunchOption("pda", "Pushdown Automata")}
                                    </div>
                                    <span className="space"></span>
                                    {this.renderLaunchOption("", "Explore!")}
                                    <span className="space"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_container">
                        <button id="return_home"
                            onClick={this.onReturnHomeButton}>
                            <UpIcon />
                        </button>
                        <div ref={this._panelContainer} className="panel_container">
                            <div className="panel_nav">
                                <div className="nav_menu">
                                    <div><a className="nav_info" onClick={this.onReportBugButton}>Report a Bug</a></div>
                                    <div><a className="nav_info" onClick={this.onAboutButton}>About</a></div>
                                    <div><a className="nav_info" onClick={this.onHelpButton}>Help</a></div>
                                </div>
                                <div className="nav_credits">
                                    <div className="top">
                                        <span className="space"></span>
                                        <span className="left">
                                            <div>Professor</div>
                                            {PROFESSORS.map(e => this.renderCreditLink(e.link, e.name))}
                                        </span>
                                        <span className="right">
                                            <div>Dev Team</div>
                                            {DEVELOPERS.map(e => this.renderCreditLink(e.link, e.name))}
                                        </span>
                                        <span className="space"></span>
                                    </div>
                                    <div className="bottom">
                                        <span className="space"></span>
                                        <span className="center">
                                            <div>Contributors</div>
                                            {CONTRIBUTORS.map(e => this.renderCreditLink(e.link, e.name))}
                                        </span>
                                        <span className="space"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="panel_timeline">
                                <Timeline />
                            </div>
                        </div>
                        <div id="github_link">
                            <a className="nav_info" onClick={this.onGithubButton}>
                                <CodeIcon />
                                Find it on <b>GitHub</b>
                            </a>
                        </div>
                        <div className="subtitle_container">
                            <label>
                                {"Thank you for reading me! Stay amazing!"}
                            </label>
                            <label>
                                {"\u00A9 2019 University of California, San Diego. All rights reserved."}
                            </label>
                        </div>
                    </div>
                </div>
                <span className="space"></span>
            </div>
        );
    }
}

//For hotloading this class
export default hot(App);
