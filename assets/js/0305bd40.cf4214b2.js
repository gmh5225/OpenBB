"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(35742);function i(e){let{title:t}=e;return a.createElement(l.Z,null,a.createElement("title",null,t))}},4223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),i=n(88828);const r={title:"PyPI",sidebar_position:4,description:"This page provides a comprehensive guide on how to install OpenBB Terminal and SDK from PyPI across multiple operating system platforms. It lists all required software and provides how-to steps to prepare the virtual environment, install the main package and its toolkits, verify the installation, and upgrade to the latest or nightly build versions.",keywords:["OpenBB Terminal installation","OpenBB SDK installation","PyPI installation guide","how to install OpenBB Terminal","how to install OpenBB SDK","software requirements for OpenBB installation","preparing virtual environment for OpenBB","installing OpenBB toolkits","verifying OpenBB installation","updating OpenBB SDK","OpenBB nightly builds"]},o=void 0,s={unversionedId:"terminal/installation/pypi",id:"terminal/installation/pypi",title:"PyPI",description:"This page provides a comprehensive guide on how to install OpenBB Terminal and SDK from PyPI across multiple operating system platforms. It lists all required software and provides how-to steps to prepare the virtual environment, install the main package and its toolkits, verify the installation, and upgrade to the latest or nightly build versions.",source:"@site/content/terminal/installation/pypi.md",sourceDirName:"terminal/installation",slug:"/terminal/installation/pypi",permalink:"/terminal/installation/pypi",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/installation/pypi.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:4,frontMatter:{title:"PyPI",sidebar_position:4,description:"This page provides a comprehensive guide on how to install OpenBB Terminal and SDK from PyPI across multiple operating system platforms. It lists all required software and provides how-to steps to prepare the virtual environment, install the main package and its toolkits, verify the installation, and upgrade to the latest or nightly build versions.",keywords:["OpenBB Terminal installation","OpenBB SDK installation","PyPI installation guide","how to install OpenBB Terminal","how to install OpenBB SDK","software requirements for OpenBB installation","preparing virtual environment for OpenBB","installing OpenBB toolkits","verifying OpenBB installation","updating OpenBB SDK","OpenBB nightly builds"]},sidebar:"tutorialSidebar",previous:{title:"Source",permalink:"/terminal/installation/source"},next:{title:"Docker",permalink:"/terminal/installation/docker"}},p={},d=[{value:"Prepare the Virtual Environment",id:"prepare-the-virtual-environment",level:2},{value:"Install the OpenBB Terminal and SDK",id:"install-the-openbb-terminal-and-sdk",level:2},{value:"Verify Installation",id:"verify-installation",level:2},{value:"Updating the OpenBB SDK Version",id:"updating-the-openbb-sdk-version",level:2},{value:"Nightly Builds",id:"nightly-builds",level:2}],u={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,{title:"PyPI - Installation | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,l.kt)("p",null,"This section provides steps to install the OpenBB Terminal and SDK from PyPI. This installation type supports Windows, macOS and Linux systems. ",(0,l.kt)("strong",{parentName:"p"},"Before starting the installation process, make sure the following pieces of software are installed.")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The instructons on this page are for installing the OpenBB Terminal from PyPI, which uses a legacy version of the Python SDK.  If you do not wish to install the OpenBB Terminal application, please refer to the installation instructions ",(0,l.kt)("a",{parentName:"p",href:"/platform/installation"},"here"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Miniconda"),"Miniconda is a Python environment and package manager. It is required for installing certain dependencies.",(0,l.kt)("p",null,"Go ",(0,l.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links"},"here")," to find the download for your operating system or use the links below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Apple-Silicon Systems: ",(0,l.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.pkg"},"Miniconda for MacOS")),(0,l.kt)("li",{parentName:"ul"},"Intel-based Mac Systems: ",(0,l.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh"},"Miniconda for MacOS")),(0,l.kt)("li",{parentName:"ul"},"Linux and WSL Systems: ",(0,l.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"},"Miniconda for Linux")),(0,l.kt)("li",{parentName:"ul"},"Raspberry PI Systems: ",(0,l.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh"},"Miniconda for Raspberry PI")),(0,l.kt)("li",{parentName:"ul"},"Windows Systems: ",(0,l.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe"},"Miniconda for Windows"))),(0,l.kt)("p",null,"To verify if Miniconda is installed on the system, open the command line and run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"conda --version\n")),(0,l.kt)("p",null,"If Miniconda is installed, a version number will be displayed, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"conda 23.1.0\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Git"),(0,l.kt)("p",null,"Check to verify if Git is installed by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git --version\n")),(0,l.kt)("p",null,"Which will print something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git version 2.31.1\n")),(0,l.kt)("p",null,"If Git is not installed, install it now from ",(0,l.kt)("inlineCode",{parentName:"p"},"conda")," by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"conda install -c anaconda git\n")),(0,l.kt)("p",null,"Or follow the instructions ",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"here")," to install it.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Microsoft C++ Build Tools (Windows only)"),(0,l.kt)("p",null,"Use the instructions ",(0,l.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"here")," to install or update Microsoft C++ Build Tools.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Rosetta2 (Apple Silicon only)"),(0,l.kt)("p",null,"Install Rosetta from the terminal with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"softwareupdate --install-rosetta\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"LibOMP (Apple Silicon only)"),(0,l.kt)("p",null,"Apple Silicon does not ship ",(0,l.kt)("inlineCode",{parentName:"p"},"libomp")," by default. It will need to be installed manually for some features of the ML toolkit to work. The ",(0,l.kt)("inlineCode",{parentName:"p"},"libomp")," library can be installed from ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew"),"."),(0,l.kt)("p",null,"Check if Homebrew is installed by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew --version\n")),(0,l.kt)("p",null,"If Homebrew is not installed, install it by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("p",null,"Or follow the instructions ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"here"),"."),(0,l.kt)("p",null,"To install LibOMP, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install libomp\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"VcXsrv (Windows Subsystem for Linux only)"),(0,l.kt)("p",null,"Since a WSL installation is headless by default (i.e., there is only access to a terminal running a Linux distribution) there are additional steps required to display visualizations. A more detailed tutorial is found, ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@shaoyenyu/make-matplotlib-works-correctly-with-x-server-in-wsl2-9d9928b4e36a"},"here"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dynamically export the DISPLAY environment variable in WSL2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# add to the end of ~/.bashrc file\nexport DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0\n# source the file\nsource ~/.bashrc\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download and install ",(0,l.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/vcxsrv/"},"VcXsrv")),(0,l.kt)("li",{parentName:"ul"},'When running the program is important to check "Disable access control"')),(0,l.kt)("p",null,"After this, ",(0,l.kt)("inlineCode",{parentName:"p"},"VcXsrv")," should be running successfully, and the machine is ready to proceed with the terminal installation."),(0,l.kt)("p",null,"Alternatives to ",(0,l.kt)("inlineCode",{parentName:"p"},"VcXsrv")," include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opticos.github.io/gwsl/"},"GWSL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://xming.en.softonic.com/"},"Xming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wayland.freedesktop.org/docs/html/"},"Wayland")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"GTK toolchains (Linux only)"),(0,l.kt)("p",null,"GTK is a window extension that is used to display interactive charts and tables. The library responsible for interactive charts and tables (",(0,l.kt)("inlineCode",{parentName:"p"},"pywry"),") requires certain dependencies, based on the Linux distribution, to be installed first."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Debian-based / Ubuntu / Mint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install libwebkit2gtk-4.0-dev\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Arch Linux / Manjaro"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pacman -S webkit2gtk\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Fedora"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf install gtk3-devel webkit2gtk3-devel\n")))),(0,l.kt)("p",null,"Proceed to next steps once the requirements above have been met."),(0,l.kt)("h2",{id:"prepare-the-virtual-environment"},"Prepare the Virtual Environment"),(0,l.kt)("p",null,"Create the environment using a configuration file from the OpenBB Terminal repository."),(0,l.kt)("p",null,"Copy and paste these commands into the terminal/command prompt:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"conda env create -n obb --file https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/conda/conda-3-9-env.yaml\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Additional ",(0,l.kt)("inlineCode",{parentName:"p"},"YAML")," files provide support for Python versions 3.8 and 3.10.  Substitute the ",(0,l.kt)("inlineCode",{parentName:"p"},"9"),", in the command above, with the desired version.")),(0,l.kt)("p",null,"Agree to the prompts if there are any."),(0,l.kt)("p",null,"After the obb environment is created, activate it by entering:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"conda activate obb\n")),(0,l.kt)("h2",{id:"install-the-openbb-terminal-and-sdk"},"Install the OpenBB Terminal and SDK"),(0,l.kt)("p",null,"Make sure to have completed all previous steps. If followed, there will be a virtual environment, named ",(0,l.kt)("inlineCode",{parentName:"p"},"obb"),", and this environment is activated."),(0,l.kt)("p",null,"Install the main package of Openbb SDK with ",(0,l.kt)("inlineCode",{parentName:"p"},"pip"),", a package manager."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install openbb==3.2.4 --no-cache-dir\n")),(0,l.kt)("p",null,"This method provides access to the data aggregation and charting functions of the OpenBB SDK. It does not provide access to the advanced features that are provided by the Portfolio Optimization and Machine Learning toolkits."),(0,l.kt)("p",null,"The toolkits can be installed individually with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'pip install "openbb[optimization]==3.2.4" --no-cache-dir\n')),(0,l.kt)("p",null,"and"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'pip install "openbb[forecast]==3.2.4" --no-cache-dir\n')),(0,l.kt)("p",null,"Install all available toolkits at once with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'pip install "openbb[all]==3.2.4" --no-cache-dir\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"pip install openbb[all]==3.2.4")," is not yet compatible with environments such as Google Colab and Kaggle as they come with preinstalled packages that can conflict with the ones used in the OpenBBTerminal and SDK.  It may be possible to install without the extra toolkits, but we currently do not officially support this type of installation.  We are working on a solution to this problem and will update this section once it is resolved.")),(0,l.kt)("h2",{id:"verify-installation"},"Verify Installation"),(0,l.kt)("p",null,"Once this installation process is completed, the terminal is launched by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"openbb\n")),(0,l.kt)("p",null,"To confirm the installation of the SDK, open the Python interpreter with a ",(0,l.kt)("inlineCode",{parentName:"p"},"python")," command, then run the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nopenbb.__version__\n")),(0,l.kt)("p",null,"You should see the version number displayed, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"'3.0.1'\n")),(0,l.kt)("p",null,"That's it!"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE:")," When the OpenBB Terminal is opened next, the Python environment will need to be activated again. When using a code editor, make sure that the correct environment is selected. This should be easy to figure out if there is an error stating that there are missing packages. To launch the OpenBB Terminal application in a new terminal window, first navigate into the folder where the source code was cloned, and then use the following two commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"conda activate obb\nopenbb\n")),(0,l.kt)("h2",{id:"updating-the-openbb-sdk-version"},"Updating the OpenBB SDK Version"),(0,l.kt)("p",null,"Upgrade the OpenBB SDK to the latest version via ",(0,l.kt)("inlineCode",{parentName:"p"},"pypi"),". When using the terminal or SDK without toolkits, first activate  environment by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"conda activate obb\n")),(0,l.kt)("p",null,"and then update the package by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install -U openbb --no-cache-dir\n")),(0,l.kt)("p",null,"When using an installation with toolkits, with the virtual environment activated, enter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'pip install -U "openbb[all]" --no-cache-dir\n')),(0,l.kt)("h2",{id:"nightly-builds"},"Nightly Builds"),(0,l.kt)("p",null,"OpenBB SDK is updated daily with new features and bug fixes, but some features being worked on may be unstable. To use the same SDK version as the development team, install the nightly build with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"conda activate obb\npip install -U openbb-terminal-nightly --no-cache-dir\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If issues are encountered with the installation, please try installing OpenBB Terminal and SDK from source ",(0,l.kt)("a",{parentName:"p",href:"/terminal/installation/source"},"(link)"),", or reach out to our ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/Up2QGbMKHY"},"Discord")," community for help.")))}c.isMDXComponent=!0}}]);