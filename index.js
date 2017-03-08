const repl = require('repl');

const r = repl.start({
  prompt: 'TW-School > ',
  eval: myEval,
  writer: myWriter
});

function myEval(cmd, context, filename, callback) {
  callback(null, cmd);
}

function myWriter(output) {
  input = output.match(/\((.+)\n\)/i)[1]

  result = ""
  if( input === 'a' ) {
    result = outputStringA()
  } else if ( input === 'b' ) {
    result = outputStringB()
  } else {
    result = outputStringC()
  }
  return result.toUpperCase();
}

function outputStringA() {
  return "你信息输入有误"
}

function outputStringB() {
  return "输入正确"
}

function outputStringC() {
  return "CCCCCCCCCCC"
}
