const app = require('./index');

let server;
let passed = 0;
let failed = 0;

async function runTests() {
  server = app.listen(4000);

  try {
    // Test 1: Health endpoint returns 200
    const healthRes = await fetch('http://localhost:4000/health');
    if (healthRes.ok) { passed++; console.log('PASS: /health returns 200'); }
    else { failed++; console.log('FAIL: /health did not return 200'); }

    // Test 2: Root returns JSON with status
    const rootRes = await fetch('http://localhost:4000/');
    const body = await rootRes.json();
    if (body.status === 'ok') { passed++; console.log('PASS: / returns status ok'); }
    else { failed++; console.log('FAIL: / did not return status ok'); }
  } catch (err) {
    failed++;
    console.log('FAIL:', err.message);
  }

  server.close();
  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

runTests();