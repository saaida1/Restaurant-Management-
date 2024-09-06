package com.Payment.microservice.paypal;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
@Slf4j
public class PaypalController {

    private final PaypalService paypalService;

    private static final String CANCEL_URL = "http://localhost:5173/cancel";  // Adjust as needed
    private static final String SUCCESS_URL = "http://localhost:5173/success";  // Adjust as needed

    @PostMapping("/create")
    public ResponseEntity<String> createPayment(
            @RequestParam("total") Double total,
            @RequestParam("currency") String currency,
            @RequestParam("description") String description
    ) {
        try {
            Payment payment = paypalService.createPayment(
                    total,
                    currency,
                    "paypal",
                    "sale",
                    description,
                    CANCEL_URL,
                    SUCCESS_URL
            );
            for (Links links : payment.getLinks()) {
                if (links.getRel().equals("approval_url")) {
                    return ResponseEntity.ok(links.getHref());
                }
            }
        } catch (PayPalRESTException e) {
            log.error("Error occurred::", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/execute")
    public ResponseEntity<String> executePayment(
            @RequestParam("paymentId") String paymentId,
            @RequestParam("payerId") String payerId
    ) {
        try {
            Payment payment = paypalService.executePayment(paymentId, payerId);
            if (payment.getState().equals("approved")) {
                return ResponseEntity.ok("Payment successful");
            }
        } catch (PayPalRESTException e) {
            log.error("Error occurred::", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.badRequest().build();
    }
}
