# Exa MCP: Limits and Alternatives

## Limits

| Mode | Limit | Notes |
|------|-------|-------|
| **Anonymous (no API key)** | ~50–150 requests/day per IP, ~2–3 QPS | Default Cursor marketplace install; 429 on heavy 16-step reports |
| **With Exa API key** | 20,000 requests/month free | [Exa pricing](https://exa.ai/pricing) |
| **Paid overage** | ~$7/1k search requests | After free tier exhausted |

**429 symptom:** `"You've hit Exa's free MCP rate limit"` → add API key (below).

## Available MCP tools

| Tool | Use |
|------|-----|
| `web_search_exa` | Discovery, competitors, market data, people/company search |
| `web_fetch_exa` | Full page markdown from known URLs |

Optional (enable via MCP URL `?tools=` param): `web_search_advanced_exa`, `agent_tools`.

## API key setup

Add to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "user-exa": {
      "url": "https://mcp.exa.ai/mcp",
      "headers": {
        "x-api-key": "YOUR_EXA_API_KEY"
      }
    }
  }
}
```

Get key: [dashboard.exa.ai/api-keys](https://dashboard.exa.ai/api-keys). Restart Cursor after change.

## Fallback stack

| Tool | Cost | Best for |
|------|------|----------|
| [curl-tools.md](curl-tools.md) | Free | robots, sitemap, headers, DNS, certs, Wayback |
| Jina Reader `curl https://r.jina.ai/URL` | Free (rate limited) | Markdown page extraction |
| Browser MCP | Free in Cursor | UI/UX audit, screenshots |
| Cursor WebSearch | Cursor quota | Broad discovery when Exa exhausted |
| Context7 MCP | Free | Library docs only, not company research |

When Exa fails, use curl + Browser MCP before stopping the report.
