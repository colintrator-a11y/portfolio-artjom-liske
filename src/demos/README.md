# Chatbot demo interfaces

Source for the three chatbot demo cards. Each file is a self-contained
1600x900 HTML page; the project images are screenshots of these.

Regenerate after editing:

```bash
google-chrome --headless --window-size=1600,900 \
  --screenshot=telegram.png src/demos/telegram.html
```

then resize to 1400x788, save as WebP into `src/assets/projects/` as:

| Source          | Project image                              |
| --------------- | ------------------------------------------ |
| `telegram.html` | `assets/projects/telegram-order-bot.webp`  |
| `whatsapp.html` | `assets/projects/whatsapp-booking-bot.webp`|
| `handover.html` | `assets/projects/chatbot-handover.webp`    |

These pages are **not** part of the built site — Vite never imports them, so
they add nothing to the bundle. They live here so the images are reproducible
rather than one-off artefacts.
