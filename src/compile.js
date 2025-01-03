const ts = require("../built/local/typescript");

const source = `
type T = { b?: never };
const x: T = { b: 0 };
`;

const sourceFile = ts.createSourceFile(
    "test.ts",
    source,
    ts.ScriptTarget.Latest,
    true
);

const options = {
    strict: true,
    noEmit: true,
    exactOptionalPropertyTypes: true
};

const program = ts.createProgram(
    [sourceFile.fileName],
    options,
    ts.createCompilerHost(options)
);

const diagnostics = ts.getPreEmitDiagnostics(program);

for (const diagnostic of diagnostics) {
    if (diagnostic.file) {
        const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
        console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
    } else {
        console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
    }
}