# Crear las carpetas principales
$folders = @(
    "src/enterprise",
    "src/user",
    "src/project",
    "src/user-project"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder
}

# Crear archivos para el módulo Enterprise
New-Item -Path "src/enterprise/enterprise.entity.ts" -ItemType File -Force
New-Item -Path "src/enterprise/enterprise.module.ts" -ItemType File -Force
New-Item -Path "src/enterprise/enterprise.service.ts" -ItemType File -Force
New-Item -Path "src/enterprise/enterprise.controller.ts" -ItemType File -Force

# Crear archivos para el módulo User
New-Item -Path "src/user/user.entity.ts" -ItemType File -Force
New-Item -Path "src/user/user-enterprise.entity.ts" -ItemType File -Force
New-Item -Path "src/user/user.module.ts" -ItemType File -Force
New-Item -Path "src/user/user.service.ts" -ItemType File -Force
New-Item -Path "src/user/user.controller.ts" -ItemType File -Force

# Crear archivos para el módulo Project
New-Item -Path "src/project/project.entity.ts" -ItemType File -Force
New-Item -Path "src/project/project.module.ts" -ItemType File -Force
New-Item -Path "src/project/project.service.ts" -ItemType File -Force
New-Item -Path "src/project/project.controller.ts" -ItemType File -Force

# Crear archivos para el módulo UserProject
New-Item -Path "src/user-project/user-project.entity.ts" -ItemType File -Force
New-Item -Path "src/user-project/user-project.module.ts" -ItemType File -Force
New-Item -Path "src/user-project/user-project.service.ts" -ItemType File -Force
New-Item -Path "src/user-project/user-project.controller.ts" -ItemType File -Force

# Crear el archivo principal AppModule
New-Item -Path "src/app.module.ts" -ItemType File -Force

Write-Host "Estructura de archivos creada exitosamente."
