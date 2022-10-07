// This extension is from https://extensions.turbowarp.org/fetch.js , Adapted by Tiger
class Fetch_Chinese {
    getInfo() {
        return {
            id: 'fetch',
            name: '获取',
            blocks: [
                {
                    opcode: 'get',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '获取 [URL] 的内容',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://extensions.turbowarp.org/hello.txt'
                        }
                    }
                }
            ]
        };
    }

    get(args) {
        return fetch(args.URL)
            .then(r => r.text())
            .catch(() => '');
    }
}

Scratch.extensions.register(new Fetch_Chinese());