<script>
    import Util from './utils/utils.js';
    import moment from 'moment';

    let isPlaying = false;
    let input;

    const knownCommands = [
        "about",
        "clear",
        "contact",
        "exit",
        "help",
        "home",
        "reload",
        "visit",
    ];

    document.body.onkeydown = () => {
        document.addEventListener('keydown', event => {
            if (!isPlaying && event.code === 'Space') 
                startGame();
        })
    };

    const startGame = async () => {
        zoomIn();
        isPlaying = true;
        const carret = document.getElementById("carret");
        input = document.getElementById("input-field");
        await Util.sleep(1050);
        carret.classList.remove("invisible");
        input.classList.remove("invisible");
        input.focus();
    };

    const zoomIn = () => 
        document.querySelectorAll("h1, h2, h3, span, a").forEach(element => {
            if (element.classList.contains("carret"))
                return;

            element.classList.add("scaled")
        });

    const keyDownInput = (event) => 
        event.key == "Enter" ? parseCommand() : null;

    const parseCommand = () => {
        const command = input.value;
        const response = evaluateCommand(command.toLowerCase());

        display("&gt; " + command, false);
        input.value = "";

        display(response, true);
    };

    const display = (text, isResponse) => {
        const history = document.getElementById("history");
    
        if (isResponse) {
            history.innerHTML += "<span class=\"response\">" + text + "</span>" + "<br>";
        } else {
            history.innerHTML += "<span class=\"code\">" + text + "</span>" + "<br>";
        }
        history.scrollTop = history.scrollHeight;
    };

    const evaluateCommand = (command) => {
        if (knownCommands.includes(command)) {
            switch(command) {
                case "exit":
                case "reload":
                    location.reload();
                    return "";
                case "visit":
                    return "Usage for visit: visit &lt;url&gt;"
                case "help":
                    return "Known commands: " + listAllCommands();
                case "clear":
                    const history = document.getElementById("history");
                    history.innerHTML = "";
                    return "";
                case "about":
                    return "Hi! I'm Jan, "+ getAge() +" years old. I study computer science at <a target=\"_blank\" href=\"https://www.th-nuernberg.de/en/\">TH Nuremberg</a> (Bavaria, Germany) and work for a German insurance company. I love to freelance in my freetime!";
                case "contact":
                    return "Contact me at <a href=\"mailto:email@janetschel.de\">mailto:email@janetschel.de</a> or at my website"
                case "home":
                    window.open("https://janetschel.dev?from=404", "_self");
                    return "";
                default:
                    return "No implementation for known command yet... Please refer to administrator."
            }
        } else {
            if (command.includes("visit")) {
                if (Util.countChar(command, " ") != 1) {
                    return "Usage for visit: visit &lt;url&gt;"
                }

                const url = command.split(" ")[1]
                window.open("https://" + url, true);

                return "Visiting " + url + "...";
            }
            
            return "Unknown command: " + command + ". Try help for help";
        }
    };

    const listAllCommands = () => {
        let response = "";
        knownCommands.forEach(command => {
            if (command === "help") {
                response += "(" + command + "), ";
            } else {
                response += command + ", ";
            }
        });
        return response.substring(0, response.length - 2);
    };

    const getAge = () => 
         moment().diff("1999-10-13", "years");
    
</script>

<div class="game-container">
    <div class="history" id="history"></div>
    <span class="carret invisible" id="carret">&gt;</span>
    <input type="text" id="input-field" class="invisible" placeholder="~" on:keydown={keyDownInput}>
</div>