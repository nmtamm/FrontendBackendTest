# For backend
```
cd backend
```

## Build Dockerfile
```
docker build -t myapp .
```

## Run
```
docker run --rm -it -p 8000:8000 myapp
```

# For frontend
```
cd frontend
```

## Install Vite plugin
```
npm install tailwindcss @tailwindcss/vite
```

## Install missing dependencies (if needed)
```
npm install @radix-ui/react-slot class-variance-authority sonner clsx date-fns tailwind-merge @radix-ui/react-label @radix-ui/react-dialog lucide-react @radix-ui/react-popover react-day-picker
```

## Run
```
npm run dev
```

## For testing purposes
Access the following link: http://localhost:5173/
