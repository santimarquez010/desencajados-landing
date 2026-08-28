Set-Location -LiteralPath $PSScriptRoot

git add -A

$hasChanges = git status --porcelain
if (-not $hasChanges) {
  Write-Host "No hay cambios para subir."
  exit 0
}

$fecha = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "Actualizacion $fecha"
git push

Write-Host ""
Write-Host "Listo. Cambios subidos a GitHub."
