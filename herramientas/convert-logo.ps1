Add-Type -AssemblyName System.Drawing

$sourcePath = (Get-Item "tecnomax-logo.jpg").FullName
$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)

$width = $bmp.Width
$height = $bmp.Height

# 1. Version Logo Blanco con Fondo Transparente
$outWhite = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# 2. Version Logo Color Original con Fondo Transparente
$outColor = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $width; $x++) {
    for ($y = 0; $y -lt $height; $y++) {
        $c = $bmp.GetPixel($x, $y)
        
        # Calcular luminosidad
        $lum = 0.299 * $c.R + 0.587 * $c.G + 0.114 * $c.B

        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            # Blanco puro o casi blanco -> Totalmente transparente
            $outWhite.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
            $outColor.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
        else {
            # Invertir oscuridad para calcular opacidad antialiasing
            $diff = 255.0 - $lum
            $alpha = [int][Math]::Min(255, [Math]::Max(0, $diff * 1.5))
            
            # Pixel Blanco puro con canal alfa suave
            $outWhite.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
            
            # Pixel Color original con fondo transparente
            $outColor.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        }
    }
}

$whiteFile = (Join-Path (Get-Location) "tecnomax-logo-white.png")
$colorFile = (Join-Path (Get-Location) "tecnomax-logo-transparent.png")

$outWhite.Save($whiteFile, [System.Drawing.Imaging.ImageFormat]::Png)
$outColor.Save($colorFile, [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$outWhite.Dispose()
$outColor.Dispose()

Write-Host "LOGOS GENERADOS EXITOSAMENTE"
