const ts = require("../built/local/typescript");

const fileNames = process.argv.slice(2);

const program = ts.createProgram(fileNames, {
    strict: true,
    noEmit: true,
    exactOptionalPropertyTypes: true
});

const emitResult = program.emit();

const allDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics);

allDiagnostics.forEach(diagnostic => {
    if (diagnostic.file) {
        let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
        console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
    } else {
        console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
    }
});