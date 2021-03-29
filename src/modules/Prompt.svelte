<script>
    import "../styles/Prompt.css"
    import Util from '../utils/utils.js';
    const knownCommands = ["about", "clear", "contact", "exit" ,"help", "home", "reload", "visit"];

    let promptShown = false;
    let input;

    document.body.onkeydown = () => {
        document.addEventListener('keydown', event => {
            if (!promptShown && event.code === 'Space') {
                promptShown = true;
                fadeElementsOut();

                input = document.getElementById("input-field");
                openPrompt(document.getElementById("carret"), input);
            }
        })
    };

    const fadeElementsOut = async () => {
        const elements = document.querySelectorAll("h1, h2, h3, span, a");
        console.log(elements);
        elements.forEach(element => {
            if (!element.classList.contains("carret"))
                element.classList.add("scaled")
        });

        await Util.sleep(1100); // need to wait until fade-out animation is done
        elements.forEach(element => {
            if (!element.classList.contains("carret"))
                element.classList.add("invisible")
        });
    };

    const openPrompt = async (carret, input) => {
        await Util.sleep(1050);

        carret.classList.remove("invisible");
        input.classList.remove("invisible");
        input.focus();
    };

    // Only parse Command if pressed key is Enter, else do null (nothing)
    const keyDownInput = (event) => event.key == "Enter" ? parseCommand() : null;

    const parseCommand = () => {
        const command = input.value;

        display("&gt; " + command, false);
        display(evaluateCommand(command.toLowerCase()), true);

        input.value = "";
    };

    const display = (text, isResponse) => {
        const history = document.getElementById("history");
        history.innerHTML += "<span class=\"" + (isResponse ? "response" : "code") + "\">" + text + "</span><br>"; 
        history.scrollTop = history.scrollHeight;
    };

    const listAllCommands = () => {
        let response = "";

        knownCommands.forEach(command => {
            response += command === "help" ? "(" + command + "), ": command + ", ";
        });

        return response.substring(0, response.length - 2);
    };

    const evaluateCommand = (command) => {
        if (knownCommands.includes(command)) {
            switch(command) {
                case "about":
                    return "Hi! I'm Jan, "+ Util.calculateCurrentAge() +" years old. I study computer science at <a target=\"_blank\" href=\"https://www.th-nuernberg.de/en/\">TH Nuremberg</a> (Bavaria, Germany) and work for a German insurance company. I love to freelance in my freetime!";
                case "contact":
                    return "Contact me at <a href=\"mailto:email@janetschel.de\">mailto:email@janetschel.de</a> or at my website"
                case "clear":
                    document.getElementById("history").innerHTML = ""; return "";
                case "exit":
                case "reload":
                    location.reload(); return "";
                case "help":
                    return "Known commands: " + listAllCommands();
                case "home":
                    window.open("https://janetschel.dev?from=404", "_self");
                    return "";
                case "visit":
                    return "Usage for visit: visit &lt;url&gt;"
                default:
                    return "No implementation for known command yet... Please refer to administrator."
            }
        } else if (command.includes("visit")) { // visit command needs extra care since it has arguments that need to be parsed
            if (Util.countChar(command, " ") != 1) {
                return "Usage for visit: visit &lt;url&gt;"
            } else {
                window.open("https://" + command.split(" ")[1], true);
                return "Visiting " + command.split(" ")[1] + "...";
            }
        } else return "Unknown command: " + command + ". Try help for help";
    };
</script>

<div class="prompt-container">
    <div class="history" id="history"></div>
    <span class="carret invisible" id="carret">&gt;</span>
    <input type="text" id="input-field" class="invisible" placeholder="~" on:keydown={keyDownInput}>
</div>
