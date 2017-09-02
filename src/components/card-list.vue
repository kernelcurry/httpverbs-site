<template>
    <div class="card-list">

        <div class="row">
            <div class="twelve column">
                <card verb="GET" docLink="https://tools.ietf.org/html/rfc7231#section-4.3.1">
                    The GET method requests transfer of a current selected representation for the target resource.  GET is the primary mechanism of information retrieval and the focus of almost all performance optimizations.
                </card>
            </div>
        </div>

        <div class="row">
            <div class="twelve column">
                <card verb="HEAD" docLink="https://tools.ietf.org/html/rfc7231#section-4.3.2">
                    The HEAD method is identical to GET except that the server MUST NOT send a message body in the response (i.e., the response terminates at the end of the header section).  The server SHOULD send the same header fields in response to a HEAD request as it would have sent if the request had been a GET, except that the payload header fields MAY be omitted.
                </card>
            </div>
        </div>

        <div class="row">
            <div class="twelve column">
                <card verb="POST" docLink="https://tools.ietf.org/html/rfc7231#section-4.3.3">
                    The POST method requests that the target resource process the representation enclosed in the request according to the resource's own specific semantics.
                </card>
            </div>
        </div>

        <div class="row">
            <div class="twelve column">
                <card verb="PUT" docLink="https://tools.ietf.org/html/rfc7231#section-4.3.4">
                    The PUT method requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.  A successful PUT of a given representation would suggest that a subsequent GET on that same target resource will result in an equivalent representation being sent in a 200 (OK) response.  However, there is no guarantee that such a state change will be observable, since the target resource might be acted upon by other user agents in parallel, or might be subject to dynamic processing by the origin server, before any subsequent GET is received.  A successful response only implies that the user agent's intent was achieved at the time of its processing by the origin server.
                </card>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['cards']
    }
</script>