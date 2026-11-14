New-Item -ItemType Directory -Force -Path 'logos'
$wc = New-Object System.Net.WebClient
$wc.Headers.Add('User-Agent', 'Mozilla/5.0')

$urls = @{
    'dahua.svg' = 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Dahua_Technology_logo.svg';
    'wd.svg' = 'https://upload.wikimedia.org/wikipedia/commons/8/87/Western_Digital_logo.svg';
    'seagate.svg' = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Seagate_logo.svg';
    'zkteco.svg' = 'https://upload.wikimedia.org/wikipedia/commons/b/b3/ZKTeco_logo.svg'
}

foreach ($k in $urls.Keys) {
    try {
        $wc.DownloadFile($urls[$k], "logos\$k")
        Write-Host "Downloaded $k"
    } catch {
        Write-Host "Failed $k"
    }
}
