// pages/api/transcript.js
export async function GET(req, res) {
    if (req.method === 'GET') {
      const response = await fetch('https://api.fireflies.ai/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer d2f19ace-4f8a-42fb-9a8a-ee92787f5b2d', // Replace with your actual API key
        },
        body: JSON.stringify({
          query: `query Transcript($transcriptId: String!) {
            transcript(id: $transcriptId) {
              title
              id
              sentences {
                index
                speaker_name
                speaker_id
                text
                raw_text
                start_time
                end_time
                ai_filters {
                  task
                  pricing
                  metric
                  question
                  date_and_time
                  text_cleanup
                  sentiment
                }
              }
            }
          }`,
          variables: { transcriptId: "LNgEW7vSqzPxVlo1" },
        }),
      });
      const data = await response.json();
      // res.status(200).json(data);
      return NextResponse.status(200).json(data);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  