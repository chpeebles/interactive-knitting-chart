# Interactive Knitting Chart

I am a passionate frontend developer during the workday and an avid knitter at night. I've knit countless of patterns, and have often struggled with having to learn new charts when picking up a new pattern. There are often differences in icons used for stitches and I have to break my knitting flow to manually cross out rows after I'm done with them so that I don't lose track of where I am at. Additionally, I often am learning a new stitch since I don't work on patterns with charts often, so I am often breaking my knitting flow even more by having to search the pattern for instructions, or (_in Hermione's voice_) even worse, search for a video where the knitter is demonstrating the stitch way too fast!

## Goals

- Improve in prompt engineering by working with [Fuel iX](https://www.fuelix.ai/) to assist me with the best way to go about accomplishing this product.
- Learn how to work with an LLM to convert an image of a chart to data that can be used to display the chart in an interactive UI.
- Build an interactive UI where users can create a project for their pattern and upload images of all of the pattern's charts. They can cross out rows to keep track of their progress, change the icons used for stitches from a small icon library, and quickly view instructions for a stitch on click.

## Plan

1. Chat with the Fuel iX Copilot to create a plan for how to get from an image to a chart to accurate data that can be used for my interactive UI
2. Start on an MVP for the front end utilziing [Cursor](https://cursor.com/en) autocomplete for efficient development

## Frontend Tech Stack

- TypeScript
- React
- Vite
- TailwindCSS

## Running the local server

1. Run `npm run dev`
2. Visit http://localhost:5173/
