import { Deck, Slide, Fragment, Code } from '@revealjs/react';
import RevealNotes from 'reveal.js/plugin/notes';
import RevealHighlight from 'reveal.js/plugin/highlight';

const SpeakerNotes = (props) => (
    <aside className="notes">{props.children}</aside>
)

export const Presentation = () => {
    return (
        <Deck
            config={{
                hash: true
            }}
            plugins={[RevealNotes, RevealHighlight]}>

            <Slide>
                <h2>HTTP</h2>
                <p>Presentation for the Full Stack Circle S26 at ReDi school</p>
            </Slide>

            <Slide>
                <h2>HTTP - what does it mean?</h2>
                <span style={{ textAlign: 'left', display: 'inline-block' }}>
                    <Fragment className='semi-fade-out current-visible' >
                        <strong>H</strong>yper<br />
                    </Fragment>
                    <Fragment className='fade-in-then-semi-out'>
                        <strong>T</strong>ext<br />
                    </Fragment>
                    <Fragment className='fade-in-then-semi-out'>
                        <strong>T</strong>ransfer<br />
                    </Fragment>
                    <Fragment>
                        <strong>P</strong>rotocol<br />
                    </Fragment>

                    <SpeakerNotes>
                        Don't care about HTT - we'll focus on "protocol" only.
                    </SpeakerNotes>
                </span>
            </Slide>

            <Slide>
                <h2>HTTP - the protocol</h2>
                <p>
                    HTTP is a <strong>network</strong> protocol
                </p>
                <p>
                    As such, it describes the communication between a <strong>client</strong>
                    and a <strong>server</strong>.
                </p>
                <p>
                    <strong>Client</strong> and <strong>server</strong> are just two computer programs.
                </p>
                <SpeakerNotes>
                    Mention OSI layers, mention IP as most will probably know it. Also mention that it doesn't matter
                    for today.
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>Protocol - high level</h2>
                <Fragment>
                    <p><strong>Client</strong> sends a request</p>
                </Fragment>
                <Fragment>
                    <p><strong>Server</strong> sends a response</p>
                </Fragment>

                <SpeakerNotes>
                    There can already be a bunch of errors here - connection error, timeout, ... We'll not talk about that
                    today.
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>Protocol - versions</h2>
                <p>There's multiple versions of HTTP in use.</p>
                <ul>
                    <li><a href="https://www.rfc-editor.org/rfc/rfc2616" target='_blank'>HTTP/1.1</a></li>
                    <li>HTTP/2</li>
                    <li>HTTP/3</li>
                </ul>
                <p>We'll only take a look at HTTP/1.1 here.</p>
            </Slide>

            <Slide>
                <h2>HTTP request</h2>
                <p>An HTTP request consists of the following:</p>
                <ul>
                    <li>A <strong>method</strong></li>
                    <li>A <strong>URI/URL/location</strong></li>
                    <li>Request <strong>headers</strong></li>
                    <li>A <strong>body</strong></li>
                </ul>

                <SpeakerNotes>
                    Mention that HTTP is used for a lot of things, and there's a lot of freedom how the parts of a
                    request can be used. There is no one answer.<br/><br/>

                    URI/URL: "Nobody" cares
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP request - example</h2>
                <Code language='http'>
{`POST /test?foo=bar HTTP/1.1
Host: www.example.com
User-Agent: curl/8.7.1
Accept: */*
Content-Type: application/json

{ "name": "Moritz" }`}
                </Code>

                <SpeakerNotes>
                    https and server left out here - this is actually not really part of HTTP but a lower layer (hence TLS).

                    There's a lot of semantics, we'll not go into depth
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP request - example in JavaScript</h2>
                <Code language="javascript">
{`fetch('https://example.com/test?foo=bar', {
  method: 'POST',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Moritz' })
});`}
                </Code>

                <SpeakerNotes>
                    https and server left out here - this is actually not really part of HTTP but a lower layer (hence TLS).

                    There's a lot of semantics, we'll not go into depth
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP request - method</h2>
                <table style={{ fontSize: '2rem'}}>
                    <thead>
                        <tr><th>Method</th><th>Description</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>GET</td><td>Retrieve stuff</td></tr>
                        <tr><td>POST</td><td>Create/update stuff</td></tr>
                        <tr><td>PUT</td><td>Also create/update stuff</td></tr>
                        <tr><td>PATCH</td><td>Partially update stuff</td></tr>
                        <tr><td>DELETE</td><td>Delete stuff</td></tr>
                        <tr><td>OPTIONS</td><td>CORS stuff</td></tr>
                        <tr><td>TRACE/HEAD/CONNECT</td><td>Some other time</td></tr>
                    </tbody>
                </table>

                <SpeakerNotes>
                    Browsers natively do GET when you open a site, can also do POST

                    fetch in JS does all of them

                    OPTIONS can be automatic

                    Mention CRUD
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP request - location</h2>
                <Code>
                    {`/foo?bar=baz&bar=3&abc#v1`}
                </Code>
                <ul>
                    <li><code>/foo</code> - path</li>
                    <li>
                        <code>?bar=baz&bar=3&abc</code> - query
                        <ul>
                            <li>bar: baz</li>
                            <li>bar: 3</li>
                            <li>abc</li>
                        </ul>
                    </li>
                    <li><code>#v1</code> - hash</li>
                </ul>

                <SpeakerNotes>
                    This is actually not part of the HTTP protocol but URL - who cares.
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP request - headers</h2>
                <Code language='http'>
{`Accept: application/json
Accept-Language: en
Authorization: Bearer eY...
Cookie: FOO=bar;BAZ=bla
Content-Type: application/json
Content-Length: 341
Host: www.example.com
X-My-Header: Moritz
`}
                </Code>

                <SpeakerNotes>
                    There's a million pre-defined headers. Custom headers are possible. Some are automatically set by the browser,
                    some by the library you use... Some are dependant on the method...
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP request - body</h2>
                <p>NOTE: <code>GET</code> doesn't have a request body!</p>
                <p><code>{`{ "name": "Moritz" }`}</code></p>
                <p>The body is <strong>binary data</strong>, i.e. bytes (numbers)</p>
                <p>
                    How the server should interpret the bytes is dependent on mostly two headers:
                </p>
                <ul>
                    <li>Content-Type</li>
                    <li>Content-Encoding</li>
                </ul>

                <SpeakerNotes>
                    Though the server is free to do whatever it wants.

                    Note: It's a mess out there, servers/clients do whatever they want.
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP - request sent</h2>
                <p>Ok, so we sent off a request from a client to a server - what now?</p>
                <p>We <code>wait</code> for the response.</p>
                <p>That's why <code>fetch</code> is <code>async</code> and we have to wait.</p>
            </Slide>

            <Slide>
                <h2>HTTP response</h2>
                <p>An HTTP response consists of the following:</p>
                <ul>
                    <li>A <strong>status code</strong></li>
                    <li>Response <strong>headers</strong></li>
                    <li>A <strong>body</strong></li>
                </ul>

                <SpeakerNotes>
                   No method, no URL/location.
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP response - status code</h2>
                <p>The status code is a number that has some basic info on the type of response</p>
                <ul>
                    <li><code>2xx</code> - "ok"</li>
                    <li><code>3xx</code> - "ok, and go somewhere else"</li>
                    <li><code>4xx</code> - "client error"</li>
                    <li><code>5xx</code> - "server error"</li>
                </ul>

                <SpeakerNotes>
                    Mention the infamous 418
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP response - headers</h2>
                <Code language='http'>
{`Cache-Control: no-store
Location: /some/path
Set-Cookie: FOO=bar; Domain=www.example.com; Max-Age=300; Secure; HttpOnly
Content-Type: application/json
Content-Length: 341
X-My-Response-Header: Moritz
`}
                </Code>

                <SpeakerNotes>
                    Pretty similar to request headers. Again, some interpreted by browser, some by library, some by
                    ourselves.
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP response - body</h2>
                <Code language='json'>
                    {`{ "person": { "name": "Moritz" } }`}
                </Code>

                <SpeakerNotes>
                    Pretty similar to request headers. Again, some interpreted by browser, some by library, some by
                    ourselves.
                </SpeakerNotes>
            </Slide>

            <Slide>
                <h2>HTTP - full example in JS, client</h2>
                <Code language='javascript'>
{`
const response = await fetch(
    'https://example.com/foo',
    { headers: { 'Accept': 'application/json' }
});
if (response.status === 200) {
  const body = await response.json();
  console.log('Found!', body);
} else {
  console.error(
    'Response failed with status %d and headers %o',
    response.status, response.headers
  );
}
`}
                </Code>
            </Slide>


            <Slide>
                <h2>HTTP - full example in JS, server</h2>
                <Code language='javascript'>
{`
app.get('/foo', (req, res) => {
  if (req.headers['Accept'] === 'application/json') {
    return res.json({ name: 'Moritz' });
  } else {
    return res.status(415).json({ error: 'Can only produce JSON' });
  }
});
`}
                </Code>
            </Slide>

            <Slide>
                <h2>HTTP - and that's about it!</h2>
                <p>What I want you to remember:</p>
                <ul>
                    <li>Request, response</li>
                    <li>Request: method, location, headers, body</li>
                    <li>Response: status, headers, body</li>
                </ul>
            </Slide>
        </Deck>
    )
}