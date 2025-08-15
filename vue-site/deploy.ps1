# Build and deploy dist contents to root (gh-pages via main branch /docs or root)
# Strategy: use docs/ folder so GitHub Pages can serve from /docs on main branch.

Write-Host "[deploy] Building..." -ForegroundColor Cyan
npm run build

$docsPath = Join-Path $PSScriptRoot '..' 'docs'
if (Test-Path $docsPath) { Remove-Item $docsPath -Recurse -Force }
New-Item -ItemType Directory -Path $docsPath | Out-Null

Copy-Item (Join-Path $PSScriptRoot 'dist' '*') $docsPath -Recurse -Force

# Add a 404.html fallback (copy index.html)
Copy-Item (Join-Path $docsPath 'index.html') (Join-Path $docsPath '404.html') -Force

Write-Host "[deploy] Files copied to docs/. Commit and push to publish." -ForegroundColor Green
